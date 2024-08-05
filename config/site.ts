export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "La Bella Italia",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    reservations: "/reservations",
    about: "/about",
    contact: "/contact",
    menu: "/menu",
  },
}
