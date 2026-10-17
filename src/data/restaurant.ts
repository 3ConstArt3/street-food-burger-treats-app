// All business details below are PLACEHOLDERS until the owner supplies real data.
// Set a value and flip `isPlaceholder` to false to activate the related buttons.
export const restaurant = {
  name: "Burger Treats",
  city: "Athens, Greece",
  address: { value: "Street address coming soon · Athens", isPlaceholder: true },
  phone: { value: "+30 ··· ··· ····", tel: "", isPlaceholder: true },
  mapsUrl: { value: "", isPlaceholder: true },
  hours: {
    isPlaceholder: true,
    rows: [
      { days: "Mon – Thu", time: "12:00 – 23:00" },
      { days: "Fri – Sat", time: "12:00 – 01:00" },
      { days: "Sunday", time: "13:00 – 23:00" },
    ],
  },
  socials: [
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
    { label: "Facebook", href: "" },
  ],
};

export const hasDirections = () => !restaurant.mapsUrl.isPlaceholder && !!restaurant.mapsUrl.value;
export const hasPhone = () => !restaurant.phone.isPlaceholder && !!restaurant.phone.tel;
