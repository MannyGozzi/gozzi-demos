import { Poppins as FontPoppins, Splash as FontSplash } from "next/font/google"

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const fontSplash = FontSplash({
  subsets: ["latin"],
  variable: "--font-splash",
  display: "swap",
  weight: ["400"],
})