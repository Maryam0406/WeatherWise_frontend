export const mockUser = {
  id: 1,
  name: "Maryam",
  email: "maryam@example.com",
  role: "user",
};

export const mockLocations = [
  { id: 1, label: "Home", city_name: "Colombo", latitude: 6.9271, longitude: 79.8612, weather: "30°C, Sunny" },
  { id: 2, label: "Work", city_name: "Kandy", latitude: 7.2906, longitude: 80.6337, weather: "26°C, Cloudy" },
  { id: 3, label: "Mom's House", city_name: "Galle", latitude: 6.0535, longitude: 80.2210, weather: "29°C, Rain" },
];

export const mockTrips = [
  {
    id: 1,
    name: "Weekend in Kandy",
    location_id: 2,
    start_date: "2026-08-22",
    end_date: "2026-08-24",
    notes: "Visit the temple and lake",
    forecast_summary: "27°C avg, rain expected Day 2",
    packingItems: [
      { id: 1, item_name: "Umbrella", is_packed: true, is_suggested: true },
      { id: 2, item_name: "Rain jacket", is_packed: true, is_suggested: true },
      { id: 3, item_name: "Sunscreen", is_packed: true, is_suggested: true },
      { id: 4, item_name: "Walking shoes", is_packed: false, is_suggested: true },
      { id: 5, item_name: "Phone charger", is_packed: false, is_suggested: false },
    ],
    activities: [
      { id: 1, activity_name: "Temple of the Tooth visit", scheduled_date: "2026-08-23T09:00:00" },
      { id: 2, activity_name: "Lakeside dinner", scheduled_date: "2026-08-23T18:00:00" },
    ],
  },
  {
    id: 2,
    name: "Family Visit - Galle",
    location_id: 3,
    start_date: "2026-09-05",
    end_date: "2026-09-07",
    notes: "",
    forecast_summary: "29°C avg, light rain",
    packingItems: [
      { id: 6, item_name: "Umbrella", is_packed: false, is_suggested: true },
      { id: 7, item_name: "Gift for mom", is_packed: false, is_suggested: false },
    ],
    activities: [],
  },
];