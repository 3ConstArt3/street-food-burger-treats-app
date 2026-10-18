// FICTIONAL development data — not verified business details.
// Replace values here when the owner supplies real data.
export const restaurant = {
  name: "Burger Treats",
  city: "Athens, Greece",
  address: {
    value: "24 Smash Lane, Kerameikos, Athens 104 35, Greece",
    street: "24 Smash Lane",
    area: "Kerameikos",
    postcode: "Athens 104 35",
    country: "Greece",
    coords: "37.9781° N · 23.7186° E",
    isPlaceholder: false,
  },
  // `tel` intentionally empty: the fictional number must not dial anywhere.
  phone: { value: "+30 210 789 4231", tel: "", isPlaceholder: false },
  mapsUrl: { value: "", isPlaceholder: true },
  hours: {
    isPlaceholder: false,
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
