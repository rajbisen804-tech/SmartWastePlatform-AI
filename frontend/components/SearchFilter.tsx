interface Props {
  search: string;
  filter: string;
  onSearch: (value: string) => void;
  onFilter: (value: string) => void;
}

export default function SearchFilter({
  search,
  filter,
  onSearch,
  onFilter,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">

      <input
        className="flex-1 rounded-xl border bg-white p-3 shadow"
        placeholder="Search reports..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
        className="rounded-xl border bg-white p-3 shadow"
      >
        <option value="all">All</option>

        <option value="pending">
          Pending
        </option>

        <option value="in_progress">
          In Progress
        </option>

        <option value="completed">
          Completed
        </option>
      </select>

    </div>
  );
}