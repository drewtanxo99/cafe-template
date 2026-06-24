export function waLink(phone, message) {
  const clean = phone.replace(/\D/g, "");
  const withCountry = clean.startsWith("977") ? clean : "977" + clean;
  return `https://wa.me/${withCountry}?text=${encodeURIComponent(message)}`;
}
