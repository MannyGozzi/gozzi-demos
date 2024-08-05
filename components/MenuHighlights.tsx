import Image from "next/image"
import { useRouter } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IMenuItem, desertItems, foodItems } from "@/app/menu/items"

import { Button } from "./ui/button"

const MenuItem = ({ menuItem }: { menuItem: IMenuItem }) => {
  return (
    <article className="max-w-64">
      <div className="relative w-64 h-72">
        <Image
          src={menuItem.image || ""}
          alt={menuItem.title}
          fill
          className="object-cover rounded-2xl"
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
        <TabsTrigger value="desert">Desert</TabsTrigger>
      </TabsList>
      <TabsContent value="food">
        <Carousel items={foodItems} />
      </TabsContent>
      <TabsContent value="desert">
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
