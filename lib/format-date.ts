export function formatMonthYear(value: string): string {
  if (value === "present") return "Actualidad";
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return value;

  const [, year, month] = match;
  const date = new Date(Number(year), Number(month) - 1);
  const formatted = new Intl.DateTimeFormat("es", {
    month: "short",
    year: "numeric",
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
