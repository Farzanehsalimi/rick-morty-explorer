export default function truncateText(str, length) {
  if (!str) return "";
  if (str.length < length) return str;
  return str.slice(0, length) + "...";
}
