"use client"

import Link from "next/link"
import { BrainCircuit, ChefHat } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Footer } from "@/components/Footer"
import MenuHighlights from "@/components/MenuHighlights"

export default function IndexPage() {
  return (
    <section className="w-full flex flex-col max-w-screen">
      <div className="relative max-h-[70vh] w-full overflow-hidden">
        <div className="h-[55vh] sm:h-[100vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/restHigh.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full items-end flex justify-end bg-gradient-to-l from-black/70 via-black/70 to-black/40 sm:via-black/50 sm:to-transparent h-full">
          <div className="rounded-2xl p-12">
            <h1 className="text-4xl font-medium leading-tight tracking-tighter md:text-7xl text-white font-splash">
              {siteConfig.name}
            </h1>
            <p className="max-w-[700px] text-lg text-white/90 mt-2">
              Your go-to for fine dining
            </p>
            <div className="mt-6 flex flex-row gap-2">
              <Link
                href={siteConfig.links.menu}
                className={buttonVariants({ variant: "secondary" })}
              >
                View Menu
              </Link>
              <Link
                href={siteConfig.links.reservations}
                className={buttonVariants({ variant: "default" })}
              >
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-4 w-full px-6 mt-6 items-center">
        <h2 className="text-3xl font-medium text-foreground md:text-4xl">
          Customer Favorites
        </h2>
        <MenuHighlights />
      </section>
      <section className="m-6 flex flex-col items-center mb-24">
        <h2 className="text-3xl font-medium text-foreground md:text-4xl my-4">
          Our Story
        </h2>
        <div className="flex flex-row gap-4 justify-evenly mt-4 flex-wrap">
          <Card className="text-lg text-muted-foreground mt-2 max-w-lg">
            <CardHeader className="text-3xl font-medium text-foreground flex flex-row gap-2">
              <ChefHat size={40} className="text-foreground" />
              Origins
            </CardHeader>
            <CardContent className="px-8 text-base">
              Since 2010, we've been serving the best food in town. Our chefs
              are dedicated to making your dining experience unforgettable. We
              source the freshest ingredients to ensure the highest quality
              meals. Our restaurant is perfect for any occasion, whether it's a
              date night or a family dinner. We look forward to serving you
              soon!
            </CardContent>
          </Card>
          <Card className="text-lg text-muted-foreground mt-2 max-w-lg">
            <CardHeader className="text-3xl font-medium text-foreground flex flex-row gap-2 items-ce">
              <BrainCircuit size={40} className="text-foreground" />
              Our Philosophy
            </CardHeader>
            <CardContent className="px-8 text-base">
              We believe that food should be more than just sustenance. It
              should be an experience. That's why we put so much care and
              attention into every dish we serve. Our menu is full of delicious
              options that are sure to please even the most discerning palate.
              We also offer a selection of fine wines and craft cocktails to
              complement your meal. Come dine with us and see for yourself what
              sets us apart.
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </section>
  )
}