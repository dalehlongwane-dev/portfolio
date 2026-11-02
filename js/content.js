/* =====================================================
   CONTENT.JS  -  THE ONLY FILE YOU NEED TO EDIT
   Change the text between the "quote marks". Keep the
   quote marks, commas and { } brackets in place.
   Save the file, then refresh index.html in your browser.
   ===================================================== */
window.SITE = {

  /* ---------- ABOUT PAGE ---------- */
  name: "Dale Hlongwane",                       // the giant heading (use CAPITALS, e.g. "GABRIEL")
  siteTitle: "YOUR NAME | Graphic Designer", // text shown in the browser tab
  aboutNote: "ABOUT ME",                   // the paperclipped note, top-left
  bio: "Independent designer working globally with founders on brands that make the business easier to understand and harder to ignore.",
  letsTalk: "LET’S TALK",                  // underlined link to the Contact page
  photo: "images/photo.svg",               // your photo (put the file in the images folder)
  photoAlt: "Portrait of the designer",    // describes the photo for screen readers
  tagline: "CREATE BEING\nBEING CREATE",   // handwritten tagline ( \n = new line )
  worksNote: "MY WORKS",                   // handwritten note with arrow
  labels: [                                // the numbered words along the bottom
    { text: "BRANDING",        color: "blue" },   // colour: blue, green or mauve
    { text: "GRAPHIC DESIGN",  color: "green" },
    { text: "PRODUCT DESIGN",  color: "mauve" }
  ],
  city: "Johannesburg",                            // shown bottom-left, next to a live clock
  timezone: "Africa/Johannesburg",               // clock time zone, e.g. "Africa/Johannesburg", "America/New_York"
  year: "2026",                            // shown on the right
  working: "WORKING GLOBALLY",             // bottom-right text

  /* ---------- CONTACT PAGE ---------- */
  contactIntro: "Got a brand that needs some love? A project keeping you up at night? Let’s talk!",
  email: "dale.hlongwane@gmail.com",

  /* Social links. label = text shown, link = where it goes.
     To ADD one (e.g. TikTok) copy a line and change it. To REMOVE one, delete its line. */
  socials: [
    { label: "IG", link: "https://www.instagram.com/fudgey_00" },
    { label: "IN", link: "https://linkedin.com/in/myusername" },
    { label: "BE", link: "https://behance.net/myusername" }
  ],

  scopes: ["Brand Identity", "Visual Direction", "UI/UX Design", "Other"],  // the dropdown choices

  /* Contact form. Read the README, step "Set up the contact form".
     formService: "web3forms" or "formspree".  formKey: paste your key/ID. */
  formService: "web3forms",
  formKey: "PASTE_YOUR_FORM_KEY_HERE",
  formSuccess: "Thanks! Your message was sent.",

  /* ---------- PROJECTS ----------
     To ADD a project: copy one whole block from { to }, (with its comma),
     paste it, then change the text and image names.
     Images live in the images folder. */
  projects: [
    {
      title: "VERDE SKINCARE",
      category: "PACKAGING DESIGN",
      year: "2026",
      role: "Brand identity and packaging",
      description: "Replace this with a short story about the project: the goal, what you did and the result.",
      image: "images/project-1.svg",          // cover image
      gallery: ["images/project-1.svg", "images/project-2.svg"]   // images on the project page
    },
    {
      title: "ATLAS STUDIO",
      category: "VISUAL DIRECTION",
      year: "2025",
      role: "Art direction",
      description: "Replace this with a short story about the project.",
      image: "images/project-2.svg",
      gallery: ["images/project-2.svg", "images/project-3.svg"]
    },
    {
      title: "NORTH RECORDS",
      category: "BRANDING",
      year: "2025",
      role: "Logo and print",
      description: "Replace this with a short story about the project.",
      image: "images/project-3.svg",
      gallery: ["images/project-3.svg"]
    },
    {
      title: "LUMEN APP",
      category: "PRODUCT DESIGN",
      year: "2024",
      role: "UI design",
      description: "Replace this with a short story about the project.",
      image: "images/project-4.svg",
      gallery: ["images/project-4.svg"]
    },
    {
      title: "OAK & ASH",
      category: "GRAPHIC DESIGN",
      year: "2024",
      role: "Identity",
      description: "Replace this with a short story about the project.",
      image: "images/project-5.svg",
      gallery: ["images/project-5.svg"]
    }
  ]
};
