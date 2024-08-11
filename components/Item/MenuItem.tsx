import React, { useState } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { IMenuItem } from "@/app/menu/items"


export default function MenuItem({ menuItem }: { menuItem: IMenuItem }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <article className="w-full">
      <div className="relative w-full aspect-square">
        {isLoading && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-2xl flex justify-center items-center">
            <Loader2 className="w-8 h-8 animate-spin text-foreground" />
          </Skeleton>
        )}
        <Image
          src={menuItem.image || ""}
          alt={menuItem.title}
          fill
          className={`object-cover rounded-2xl ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="font-medium mt-2">{menuItem.title}</h3>
      <p className="text-sm text-muted-foreground">{menuItem.description}</p>
    </article>
  )
}
