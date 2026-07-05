import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "EcoSync AI",
    template: "%s | EcoSync AI",
  },

  description:
    "AI-Powered Smart Waste Management Platform for Smart Cities.",

  keywords: [
    "Waste Management",
    "Artificial Intelligence",
    "Smart City",
    "Recycling",
    "Next.js",
    "FastAPI",
    "EcoSync AI",
  ],

  authors: [
    {
      name: "Raj Bisen",
    },
  ],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={poppins.variable}
    >
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,

            style: {
              borderRadius: "12px",
              background: "#ffffff",
              color: "#111827",
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            },

            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

        {children}

      </body>
    </html>
  );
}