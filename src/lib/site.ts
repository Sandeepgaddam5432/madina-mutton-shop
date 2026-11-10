export const SITE = {
  name: "Madina Mutton Shop",
  nameTelugu: "మదీనా మటన్ షాపు",
  founders: ["Tahir Pasha", "Ishaan"],
  phones: [
    { display: "+91 95054 77405", tel: "+919505477405", wa: "919505477405" },
    { display: "+91 95054 77401", tel: "+919505477401", wa: "919505477401" },
  ],
  /** Primary WhatsApp number (bookings go here). */
  whatsapp: "919505477405",
  address: "Narmetta (Village), Beside Bank of Baroda, Vellanda Road, Telangana",
  /** Shop hours in IST, 24h clock (decimal hours). */
  hours: { open: 5.5, close: 21, openLabel: "5:30 AM", closeLabel: "9:00 PM" },
  mapQuery: "Bank of Baroda, Narmetta, Vellanda Road, Telangana",
  minDoorstepKg: 15,
} as const;

export function mapEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
}

export function mapLinkUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;
}

export function waLink(text: string, number: string = SITE.whatsapp): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
