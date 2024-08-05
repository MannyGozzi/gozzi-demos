"use client"

import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { IMenuItem } from "@/app/menu/items"

export default function MenuItem({ menuItem }: { menuItem: IMenuItem }) {
  return (
    <Card className="max-w-xs hover:shadow">
      <h3 className="text-lg font-medium text-foreground w-full px-4 mt-4">
        {menuItem.title}
      </h3>
      <CardContent className="flex gap-4 p-4 flex-wrap md:flex-nowrap">
        <div className="grid items-center gap-2">
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground">Calories</div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              {menuItem.calories}/2000
              <span className="text-sm font-normal text-muted-foreground">
                kcal
              </span>
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground">Exercise</div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              73/120
              <span className="text-sm font-normal text-muted-foreground">
                min
              </span>
            </div>
          </div>
          <div className="grid flex-1 auto-rows-min gap-0.5">
            <div className="text-sm text-muted-foreground">Stand</div>
            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
              8/12
              <span className="text-sm font-normal text-muted-foreground">
                hr
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
            exercise: {
              label: "Exercise",
              color: "hsl(var(--chart-2))",
            },
            stand: {
              label: "Stand",
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
                activity: "stand",
                value: (8 / 12) * 100,
                fill: "var(--color-stand)",
              },
              {
                activity: "exercise",
                value: (46 / 60) * 100,
                fill: "var(--color-exercise)",
              },
              {
                activity: "calories",
                value: (menuItem.calories / 2000) * 100,
                fill: "var(--color-calories)",
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
    </Card>
  )
}
