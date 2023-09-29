export function formatDate(isoDate: string): string {
  const dateObject = new Date(isoDate);
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = String(dateObject.getFullYear());

  return `${day}.${month}.${year}`;
}