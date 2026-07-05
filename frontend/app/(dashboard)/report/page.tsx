"use client";

import { useState } from "react";

export default function ReportPage() {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);

    try {
      // Step 1 - Upload Image
      const formData = new FormData();
      formData.append("file", image);

      const uploadResponse = await fetch(
        "http://127.0.0.1:8000/upload/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error("Image upload failed");
      }

      const uploadData = await uploadResponse.json();

      // Step 2 - Create Report
      const token = localStorage.getItem("access_token");

      const reportResponse = await fetch(
        "http://127.0.0.1:8000/reports/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            image_url: uploadData.image_url,
            description,
            address,
          }),
        }
      );

      if (!reportResponse.ok) {
        console.log(await reportResponse.text());
        throw new Error("Report creation failed");
      }

      const report = await reportResponse.json();

      alert(`✅ Report Submitted Successfully!\nReport ID: ${report.id}`);

      // Reset form
      setImage(null);
      setDescription("");
      setAddress("");

      const fileInput = document.getElementById(
        "image"
      ) as HTMLInputElement;

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Report Waste
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block font-medium">
            Waste Image
          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setImage(
                e.target.files?.[0] ?? null
              )
            }
          />
        </div>

        <textarea
          placeholder="Description"
          className="w-full rounded-lg border p-3"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full rounded-lg border p-3"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

        <button
          disabled={loading}
          className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading
            ? "Submitting..."
            : "Submit Report"}
        </button>
      </form>
    </main>
  );
}