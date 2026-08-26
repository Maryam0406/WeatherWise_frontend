# WeatherWise — Frontend

A weather-aware trip planning application. This is the Week 2 frontend deliverable: a fully interactive React interface using mock data, built to be connected to a real backend in Week 4.

## Tech Stack
- React 18 (via Vite)
- React Router DOM — client-side routing
- Tailwind CSS — styling
- Chart.js + react-chartjs-2 — forecast trend chart

## Views / Pages
1. **Login / Signup** (`/`) — tabbed authentication screen with role selection on signup
2. **Dashboard** (`/dashboard`) — summary stats, saved locations, trips overview, forecast chart
3. **Trips List** (`/trips`) — full list of all planned trips
4. **Trip Detail** (`/trips/:id`) — editable packing list (add/check/delete) and activities (add/delete)
5. **New Trip** (`/trips/new`) — form to create a trip, with validation
6. **Location Detail** (`/locations/:id`) — current conditions, 7-day forecast, remove location
7. **Profile** (`/profile`) — user info and account stats

All pages are interconnected via a persistent sidebar (React Router `NavLink`), with active-page highlighting.

## Development Process
The frontend was built incrementally, page by page: project scaffolding (Vite + Tailwind) → routing skeleton → shared Sidebar layout → Dashboard → Location Detail → New Trip form → Trip Detail (packing list + activities) → Login/Signup → Trips List and Profile. Each page was built and tested individually before moving to the next, with git commits at each working checkpoint.

Shared application data (trips, locations) is lifted to the top-level `App.jsx` component and passed down to pages as props, along with update functions (`addTrip`, `togglePackingItem`, `addPackingItem`, `deletePackingItem`, `addActivity`, `deleteActivity`, `addLocation`, `deleteLocation`). This means an action on one page (e.g. adding a trip) is immediately reflected everywhere else in the app that displays trips.

Since there is no backend yet (that's Week 3), all data currently lives in React state, seeded from a mock data file (`src/data/mockData.js`) shaped to match the application's planned database schema — field names and relationships mirror the ER diagram from the Week 1 design document, so wiring up the real API in Week 4 should require minimal restructuring.

## Design Patterns & Libraries Used
- **Pages vs. Components split** — `src/pages/` holds one component per route; `src/components/` holds reusable pieces (currently the Sidebar)
- **Lifted state pattern** — shared, changeable data lives in the nearest common parent (`App.jsx`) rather than in individual pages, and is passed down via props
- **Controlled components** — every form input (text, select, checkbox, radio, textarea, date) is controlled by React state, not the DOM's default behavior
- **Client-side validation** — the New Trip form checks required fields and date ordering before submission, directly implementing the validation logic planned in the Week 1 architecture flowcharts
- **Conditional rendering** — used throughout for error messages, empty states (e.g. "No trips yet"), and toggling Login/Signup modes within a single component

## Accessibility
- All form inputs have associated `<label>` elements via matching `htmlFor`/`id`
- Radio button groups use `<fieldset>`/`<legend>`
- Icon-only or ambiguous buttons (e.g. delete actions) include `aria-label`
- Error messages use `role="alert"` so they are announced by screen readers
- Manually tested full keyboard navigation (Tab/Shift+Tab) across all pages — every interactive element is reachable and shows a visible focus state

## Responsiveness
Layout uses Tailwind's responsive breakpoints (`sm:`, `md:`) throughout — the sidebar switches from a full-width top bar on mobile to a fixed side column on larger screens, and grids (location cards, forecast days, stat cards) collapse from multi-column to single-column on narrow viewports. Manually tested by resizing the browser and using DevTools' device toolbar at mobile widths (~375px).

## Known Limitations (intentional scope for this stage)
- All data is mock/local React state — no real backend or persistence yet (Week 3 builds the API, Week 4 connects it)
- Login does not perform real authentication yet — it simulates a successful login and redirects
- Weather data is hardcoded rather than live (live weather via Open-Meteo is planned for Week 4 integration)

## Running Locally
```bash
npm install
npm run dev
```
Then open the local URL shown in your terminal (typically `http://localhost:5173`).