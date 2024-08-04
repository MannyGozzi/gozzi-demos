"use client"

import { ReactNode } from "react"

import MenuItem from "@/components/MenuItem"

import { desertItems, foodItems } from "./items"

const MenuItemsWrapper = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-4">
    {children}
  </div>
)

export default function MenuScreen() {
  return (
    <div className="mt-24 px-8 w-full h-full pb-8">
      <h2 className="text-3xl font-bold tracking-tight mb-6 mt-12">Entrees</h2>
      <MenuItemsWrapper>
        {foodItems.map((item) => (
          <MenuItem key={item.title} menuItem={item} />
        ))}
      </MenuItemsWrapper>
      <h2 className="text-3xl font-bold tracking-tight mb-6 mt-12">Desert</h2>
      <MenuItemsWrapper>
        {desertItems.map((item) => (
          <MenuItem key={item.title} menuItem={item} />
        ))}
      </MenuItemsWrapper>
    </div>
  )
}
