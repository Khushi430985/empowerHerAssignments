# Responsive Personal Portfolio Page

This project is a fully responsive personal portfolio website built using *HTML and CSS only*, as required by the Masai assignment. The website contains a Header, Hero section, Skills section, Contact, and Footer, and is responsive across desktop, tablet, and mobile devices.

---

## 🔧 AI Tool Used

*AI Tool Used:* Bolt.new

I used Bolt.new to generate the initial project structure. Bolt generated multiple boilerplate files including Vite configuration, JavaScript modules, and package files by default.

However, since the assignment requires *HTML + CSS only*, I did not use these extra files in the final implementation.

---

## 🛠 Manual Changes Made

After generating the template from Bolt.new, I made the following manual modifications:

- Converted project to *pure HTML + CSS* (no React, no Tailwind, no JavaScript)
- Replaced the generated HTML structure with custom clean markup
- Created custom responsive layout using media queries
- Updated content (name, hero text, skills, buttons, footer links)
- Added custom hover animation for skills section
- Removed script references from index.html
- Styled components manually using style.css
- Ensured website opens directly using only index.html (no build tools)

The project works without Node, Vite, npm, or any JS dependency.

---

## 📁 Folder Structure

Below is the actual structure of the repository:
project-folder/ │── .bolt/               ← auto-generated, unused │── public/              ← auto-generated, unused │── package.json         ← auto-generated, unused │── package-lock.json    ← auto-generated, unused │── counter.js           ← auto-generated, unused │── main.js              ← auto-generated, unused │── javascript.svg       ← auto-generated, unused │── index.html           ←  used (final working code) │── style.css            ←  used (custom styles) │── README.md

Even though the extra files remain in the folder to reflect AI-generated output, they are *not used* or linked, and the final webpage runs only through index.html.

---

## 📱 Responsiveness Breakdown

| Device Width | Behavior |
|--------------|----------|
| *≥1024px (Desktop)* | Navbar inline, skills in 3 columns |
| *768–1023px (Tablet)* | Skills in 2 columns, text reflows |
| *≤767px (Mobile)* | Stacked nav, skills 1 column, no horizontal scroll |

---

## 🧩 Sections Included

- *Header* — navigation + name/logo
- *Hero Section* — headline + short description + button
- *Skills Section* — grid layout with 6 skills
- *Contact Section*
- *Footer* — social links

---

## 👤 Author Details

*Name:* Khushi  
---

## 🚀 How to Run

No installation required.

Just open:
index.html 
in any browser