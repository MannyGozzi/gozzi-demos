import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <Image
        src="/images/restaurant.jpg"
        alt="Restaurant background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute bottom-16 left-0 z-10 w-full items-end flex justify-end h-full">
        <div className="rounded-2xl p-12">
          <h1 className="text-3xl font-medium leading-tight tracking-tighter md:text-6xl text-white">
            {siteConfig.name}
          </h1>
          <p className="max-w-[700px] text-lg text-white/90 mt-2">
            Your go-to for everyday fine dining.
          </p>
          <div className="mt-6 flex flex-row gap-2">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              View Menu
            </Link>
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "default" })}
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
