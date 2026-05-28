---
name: Luminous Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d494c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d797d'
  outline-variant: '#bcc9cd'
  surface-tint: '#00687a'
  primary: '#00687a'
  on-primary: '#ffffff'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#4cd7f6'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#505f76'
  on-tertiary: '#ffffff'
  tertiary-container: '#97a8c1'
  on-tertiary-container: '#2d3d52'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  stack-xs: 0.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
The design system moves away from the heavy luminescence of dark mode toward a "Luminous Precision" aesthetic. It targets professional AI-driven environments where clarity, speed, and cognitive ease are paramount. The style is **Corporate Modern** with a lean toward **Minimalism**, emphasizing extreme legibility and structured hierarchy. 

The emotional response should be one of "Technical Clarity"—feeling like a high-end laboratory or a refined workspace. By utilizing high-contrast typography against sterile but warm whites and light grays, the UI recedes to let the data and AI insights take center stage. Glassmorphism is dialed back to subtle backdrop filters, and heavy glows are replaced with sharp, purposeful lines.

## Colors
This design system utilizes a high-clarity light palette designed for long-term productivity. 
- **Primary (#06b6d4):** Retained as the functional accent for actions, progress, and focus states. 
- **Neutral Base (#f8fafc):** A cool, surgical white-gray used for the main canvas to reduce eye strain compared to pure #ffffff.
- **Surface Palette:** Employs a range of grays (#f1f5f9 to #e2e8f0) to define container boundaries without the need for heavy shadows.
- **Typography:** Uses #0f172a (Slate 900) for primary text to ensure maximum contrast ratios, with #64748b for secondary metadata.

## Typography
**Hanken Grotesk** is the sole typeface, providing a sharp, contemporary sans-serif feel that balances geometric precision with humanist readability. 
- **Headlines:** Use tighter letter-spacing and heavier weights to create a strong visual anchor. 
- **Body:** Set with generous line-height to ensure the dense data common in AI applications remains digestible. 
- **Labels:** Small caps or increased tracking are used for utility labels to differentiate them from interactive body text.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a professional, dashboard-like structure, while transitioning to a **Fluid Grid** for mobile devices.
- **Grid:** A 12-column grid is used for desktop (1440px viewport), 8 columns for tablet, and 4 columns for mobile.
- **Rhythm:** An 8px (0.5rem) base unit governs all spacing.
- **Padding:** Interactive elements utilize generous internal padding to maintain a "breathable" light-mode feel.

## Elevation & Depth
In the transition to light mode, depth is communicated through **Tonal Layering** and **Ambient Shadows** rather than glows.
- **Level 0 (Background):** #f8fafc.
- **Level 1 (Cards/Surface):** #ffffff with a 1px border of #e2e8f0.
- **Level 2 (Dropdowns/Modals):** #ffffff with a soft, diffused shadow: `0 10px 15px -3px rgba(0, 0, 0, 0.05)`.
- **Level 3 (Overlays):** 20% backdrop blur on a semi-transparent #ffffff surface to maintain context without visual noise.

## Shapes
The design system employs a **Rounded** shape language (8px / 0.5rem base) to soften the "technical" edge of the AI aesthetic, making it feel more approachable. 
- **Small Elements (Inputs/Buttons):** 8px.
- **Large Elements (Cards/Containers):** 16px.
- **Interactive Indicators:** Pill shapes are reserved exclusively for status tags and chips to provide a distinct visual contrast from functional buttons.

## Components
- **Buttons:** Primary buttons use a solid Cyan (#06b6d4) fill with white text. Secondary buttons use a #f1f5f9 background with #0f172a text. All buttons have an 8px radius.
- **Input Fields:** Background is #ffffff with a 1px #e2e8f0 border. On focus, the border transitions to #06b6d4 with a subtle 2px outer ring.
- **Cards:** White backgrounds, 1px subtle borders (#e2e8f0), and 16px corner radius. Shadows are avoided for cards unless they are hovered.
- **Chips:** Light tint of primary color (`rgba(6, 182, 212, 0.1)`) with #06b6d4 text for active states; neutral gray for inactive.
- **Status Indicators:** Use small, solid-colored dots next to labels instead of large glowing rings to maintain the professional aesthetic.
- **AI Feedback:** Suggested AI actions or text are highlighted with a very subtle #ecfeff (Cyan-50) background tint.