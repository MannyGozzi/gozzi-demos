import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { IMenuItem, desertItems, foodItems } from "@/app/menu/items"

import { Button } from "./ui/button"

const MenuItem = ({ menuItem }: { menuItem: IMenuItem }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <article className="max-w-64">
      <div className="relative w-64 h-72">
        {isLoading && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
        )}
        <Image
          src={menuItem.image || ""}
          alt={menuItem.title}
          fill
          className={`object-cover rounded-2xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="font-medium">{menuItem.title}</h3>
      <p className="text-sm text-muted-foreground">{menuItem.description}</p>
    </article>
  )
}

const Carousel = ({ items }: { items: IMenuItem[] }) => {
  return (
    <div className="flex gap-4 overflow-x-scroll flex-1">
      {items.map((item) => (
        <MenuItem key={item.title} menuItem={item} />
      ))}
    </div>
  )
}

export default function MenuHighlights() {
  const router = useRouter()
  return (
    <Tabs defaultValue="food" className="w-full flex flex-col justify-center">
      <TabsList className="flex self-center w-fit mb-3">
        <TabsTrigger value="food">Food</TabsTrigger>
        <TabsTrigger value="dessert">Dessert</TabsTrigger>
      </TabsList>
      <TabsContent value="food">
        <Carousel items={foodItems} />
      </TabsContent>
      <TabsContent value="dessert">
        <Carousel items={desertItems} />
      </TabsContent>
      <Button
        className="self-center mt-4"
        onClick={() => {
          router.push("/menu")
        }}
      >
        View Full Menu
      </Button>
    </Tabs>
  )
}