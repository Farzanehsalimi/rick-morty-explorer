# Rick and Morty Explorer

A fully featured **React + Vite** application built by **[Farzaneh Salimi](https://farzanehsalimi.ir)**, powered by the Rick and Morty API. The project follows a **feature‑based architecture**, delivers smooth navigation through **React Router**, and uses **TanStack Query** for efficient data fetching and caching.

---

## 🌐 Live Demo

The project is deployed on Vercel:
**[https://morty.farzanehsalimi.ir/](https://morty.farzanehsalimi.ir/)**

---

## 🚀 Tech Stack

- **React (JavaScript)**
- **Vite**
- **TailwindCSS** for modern UI styling
- **TanStack Query** for data synchronization and caching
- **React Router DOM** for routing between pages
- **Headless UI** for accessible, customizable filter components
- **React Icons** for iconography
- **React Spinners** for loading states
- **Skeleton UI** for data‑loading placeholders
- **Feature-Based Folder Architecture** (modular, scalable structure)
- **Framer-Motion** for animations and UI transitions

---

## 📁 Project Structure

This project refactors the traditional folder layout by grouping domain-specific components and hooks inside feature folders (characters, locations, episodes), while common hooks, services, and UI components are maintained separately under shared directories for better reusability and modularity

```bash
src/
  features/
    characters/
    locations/
    episodes/
  context/
  hooks/
  pages/
  services/
  styles/
  ui/
  utils/
```

---

## 🧭 App Overview

The application includes **three main pages**, each with robust filtering, search, pagination, and detail views.

### 1. Characters Page

Displays a paginated, searchable, and filterable list of characters.

**Features:**
Pagination, search bar, three filters (species, status, gender), character detail pages, skeleton UI, smooth animations via Framer-Motion.

Characters Page — Interaction Previews:

#### Pagination

<img src="/readme-assets/characters-pagination.gif" alt="characters-pagination-gif" width="600"/>

#### Search

<img src="/readme-assets/characters-search.gif" alt="characters-search-gif" width="600"/>

#### Filters (Species / Status / Gender)

<img src="/readme-assets/characters-filtering.gif" alt="characters-filtering-gif" width="600"/>

#### Responsive Design

The entire application is fully responsive across mobile, tablet, and desktop breakpoints. All three main pages (Characters, Locations, Episodes) follow the same responsive layout strategy.

<img src="/readme-assets/characters-responsive.gif" alt="characters-responsive-gif" width="600"/>

#### Character Detail Page

<img src="/readme-assets/character-detail-page.png" alt="character-detail-page" width="600"/>

### 2. Locations Page

Shows all locations with pagination, filters, and resident lists.

<img src="/readme-assets//locations-page.png" alt="locations-page" width="600"/>

### 3. Episodes Page

Displays episodes with pagination and search, with expandable character lists.

<img src="/readme-assets/episodes-page.png" alt="episodes-page" width="600"/>

---

## 🌙 Theme Support

The application includes full **Dark Mode / Light Mode** support, stored in local state/Theme provider and reflected across the UI.

---

## 🔄 Loading & Error Handling

- Skeleton UI for lists and detail pages
- React Spinners for subtle loading indicators
- Full error boundary behavior using TanStack Query

---

## 🛠️ Installation

Clone the project and install dependencies.

```bash
git clone https://github.com/Farzanehsalimi/rick-morty-explorer.git
cd rick-morty-explorer
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

Crafted with care by **Farzaneh Salimi** — [farzanehsalimi.ir](https://farzanehsalimi.ir) ✨
