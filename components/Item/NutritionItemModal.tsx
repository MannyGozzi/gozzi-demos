"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { IMenuItem } from "@/app/menu/items"

export default function NutritionItemModal({
  menuItem,
  onClose,
}: {
  menuItem: IMenuItem
  onClose: () => void
}) {
  const AnimCard = motion(Card)
  if (!menuItem) return null
  return (
    <div
      className="fixed bg-transparent top-0 left-0 w-full h-full flex justify-center items-center"
      onClick={onClose}
    >
      <AnimCard
        className="max-w-xl w-full hover:shadow mx-4"
        layoutId={menuItem.title}
        drag
        // make drag momentum slow down faster
        dragTransition={{ timeConstant: 100, power: 0.05 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row w-full justify-between">
          <h3 className="text-2xl font-medium text-foreground px-4 mt-4">
            {menuItem.title}
          </h3>
          <X
            size={25}
            className="cursor-pointer text-foreground p-3 size-10 m-2 bg-secondary rounded-lg"
            onClick={onClose}
          />
        </div>

        <CardContent className="flex gap-4 p-4 flex-wrap md:flex-nowrap">
          <div className="grid items-center gap-2">
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Calories</div>
              <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                {menuItem.calories}
                <span className="text-sm font-normal text-muted-foreground">
                  /2000kcal
                </span>
              </div>
            </div>
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Carbs</div>
              <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                {menuItem.carbs}
                <span className="text-sm font-normal text-muted-foreground">
                  /300g
                </span>
              </div>
            </div>
            <div className="grid flex-1 auto-rows-min gap-0.5">
              <div className="text-sm text-muted-foreground">Fats</div>
              <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                {menuItem.fats}
                <span className="text-sm font-normal text-muted-foreground">
                  /120g
                </span>
              </div>
            </div>
          </div>
          <ChartContainer
            config={{
              calories: {
                label: "Calories",
                color: "hsl(var(--chart-1))",
              },
              carbs: {
                label: "Carbs",
                color: "hsl(var(--chart-2))",
              },
              fats: {
                label: "Fats",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="mx-auto aspect-square w-full max-w-[80%]"
          >
            <RadialBarChart
              margin={{
                left: -10,
                right: -10,
                top: -10,
                bottom: -10,
              }}
              data={[
                {
                  activity: "fats",
                  value: (menuItem.fats / 120) * 100,
                  fill: "hsl(var(--chart-3))",
                },
                {
                  activity: "carbs",
                  value: (menuItem.carbs / 300) * 100,
                  fill: "hsl(var(--chart-2))",
                },
                {
                  activity: "calories",
                  value: (menuItem.calories / 2000) * 100,
                  fill: "hsl(var(--chart-1))",
                },
              ]}
              innerRadius="20%"
              barSize={24}
              startAngle={90}
              endAngle={450}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                dataKey="value"
                tick={false}
              />
              <RadialBar dataKey="value" background cornerRadius={5} />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </AnimCard>
    </div>
  )
}
