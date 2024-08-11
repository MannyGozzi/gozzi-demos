import { useRouter } from "next/navigation"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuItem from "@/components/Item/MenuItem"
import { IMenuItem, desertItems, foodItems } from "@/app/menu/items"

import { Button } from "./ui/button"

const MenuCarousel = ({ items }: { items: IMenuItem[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map((item) => (
          <CarouselItem
            key={item.title}
            className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <MenuItem menuItem={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}

export default function MenuHighlights() {
  const router = useRouter()
  return (
    <Tabs
      defaultValue="food"
      className="w-full max-w-3xl flex flex-col items-center"
    >
      <TabsList className="mb-4 mx-auto">
        <TabsTrigger value="food">Food</TabsTrigger>
        <TabsTrigger value="dessert">Dessert</TabsTrigger>
      </TabsList>
      <TabsContent value="food" className="w-full px-0 sm:px-10">
        <MenuCarousel items={foodItems} />
      </TabsContent>
      <TabsContent value="dessert" className="w-full px-4">
        <MenuCarousel items={desertItems} />
      </TabsContent>
      <Button
        className="mt-4 mx-auto block"
        onClick={() => {
          router.push("/menu")
        }}
      >
        View Full Menu
      </Button>
    </Tabs>
  )
}
