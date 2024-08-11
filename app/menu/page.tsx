"use client"

import React, { ReactNode, useCallback, useState } from "react"
import { AnimatePresence } from "framer-motion"

import NutritionItem from "@/components/Item/NutritionItem"
import NutritionItemModal from "@/components/Item/NutritionItemModal"

import { IMenuItem, desertItems, foodItems } from "./items"

const MenuItemsWrapper = React.memo(({ children }: { children: ReactNode }) => (
  <div className="flex flex-row flex-wrap w-full gap-4">{children}</div>
))

const MemoizedNutritionItem = React.memo(NutritionItem)

export default function MenuScreen() {
  const [modalItem, setModalItem] = useState<IMenuItem | null>(null)

  const nutritionItemOnClick = useCallback((item: IMenuItem) => {
    setModalItem(item)
  }, [])

  const closeModal = useCallback(() => {
    setModalItem(null)
  }, [])

  return (
    <div className="mt-24 px-6 h-full pb-8 flex flex-col mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight mb-6 mt-12">Entrees</h2>
      <MenuItemsWrapper>
        {foodItems.map((item) => (
          <MemoizedNutritionItem
            key={item.title}
            menuItem={item}
            onClick={nutritionItemOnClick}
          />
        ))}
      </MenuItemsWrapper>
      <h2 className="text-3xl font-bold tracking-tight mb-6 mt-12">Desert</h2>
      <MenuItemsWrapper>
        {desertItems.map((item) => (
          <MemoizedNutritionItem
            key={item.title}
            menuItem={item}
            onClick={nutritionItemOnClick}
          />
        ))}
      </MenuItemsWrapper>
      <AnimatePresence initial={false} mode="wait">
        {modalItem && (
          <NutritionItemModal menuItem={modalItem} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  )
}
