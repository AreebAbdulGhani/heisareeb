# HeIsAreeb - The Godly Arena

> "The more impossible it seems, the more it attracts me."

This project is a high-concept, single-page personal portfolio website designed with an **Ancient Rome / Godly Aesthetic**. It features cinematic splash screens, interactive audio, and premium visual effects powered by Next.js and Tailwind CSS.

## 🏛️ Concept & Theme

The core concept is "The Arena". The user is not just visiting a website; they are entering a domain.
- **Visuals**: Deep obsidian blacks, metallic golds (`#bf953f`), ancient marble textures, and dramatic lighting.
- **Atmosphere**: Rising sparks, rolling golden fog, and a "Dark Matter" texture overlay create a living, breathing environment.
- **Interaction**: The site is gated. A massive "Golden Gate" blocks the view until the user explicitly chooses to "Enter My Arena", triggering audio and a physical gate-opening animation.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: CSS Modules & Native CSS Keyframes (`animate-spin-slow`, `animate-cloud-flow`, `animate-pulse`)
- **Fonts**: `Cinzel` (or Roman-style serif fallback)

## 📂 Code Structure (`app/page.tsx`)

The entire experience is consolidated into a single file for seamless transitions. Here is how the "Concept Code" works:

### 1. State Management
We use React `useState` to track the "Gate" status:
- `hasEntered`: `false` by default. When `true`, it triggers the gate opening animation and plays the audio.
- `isMuted`: Toggles the background audio.
- `mounted`: Prevents hydration errors by ensuring effects run only on the client.

### 2. The Golden Gates (Splash Screen)
This is the `fixed inset-0` overlay that sits on top of everything.
- **Left/Right Gates**: Two absolute `div`s taking up 50% width each.
- **Opening Mechanism**: When `hasEntered` becomes `true`, CSS transforms slide them apart:
    - Left Gate: `-translate-x-full`
    - Right Gate: `translate-x-full`
    - **Easing**: `cubic-bezier(0.25, 1, 0.5, 1)` gives it a heavy, mechanical feel.
- **Visual Layers**:
    - **Atmosphere**: A `z-30` layer contains the animated clouds (gradients), rising embers (particles), and god rays.
    - **Interaction**: The "Enter My Arena" button sits at `z-50`. It uses a `conic-gradient` to create a spinning golden border.

### 3. The Main Arena (Content)
This lives in the main `<section>` and is revealed once the gates open.
- **Video Background**: An HTML5 `<video>` plays a loop of a bronze statue/movement, styled with `grayscale` and `sepia` filters to look like moving metal.
    - **Responsive**: Shifts alignment to `object-[65%]` on mobile to keep the subject in frame.
- **Overlays**:
    - **Marble Texture**: A fixed SVG noise filter creates a grainy, stone-like texture over the entire screen.
    - **Vignette**: A radial gradient darkens the corners to focus attention on the center.
- **Typography**: Large, uppercase text with custom "Gold Gradients" applied via `background-clip: text`.
    - **Responsive**: Scales from `text-[3.5rem]` on mobile to `text-[8.5rem]` on desktop.

## 📱 Mobile Optimization
The site is fully responsive with specific overrides for handheld devices:
- **Touch Targets**: Buttons resize from `px-24` (desktop) to `px-12` (mobile) for better fit.
- **Atmosphere**: Fog height adjusts (`50vh`) to ensure interactables remain visible.
- **Layout**: "Inquiries" and buttons align left for a clean vertical scan on narrow screens.

## 📧 Contact & Inquiries
- **Instagram**: Deep-linked to the app via custom URL scheme.
- **Email**: `areeb@heisareeb.com` (Left-aligned, below CTA).

## 🎨 Key CSS Effects

### The "Godly" Gold Text
```css
.gold-text {
  background: linear-gradient(to bottom, #bf953f 0%, #fcf6ba 40%, #b38728 60%, #fbf5b7 100%);
  -webkit-background-clip: text;
  color: transparent;
}
```

### The "Mystical Fog"
Created using two overlapping layers of massive, blurred radial gradients that move horizontally using `animate-cloud-flow`.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## 📜 License
Created for HeIsAreeb. All Rights Reserved.
