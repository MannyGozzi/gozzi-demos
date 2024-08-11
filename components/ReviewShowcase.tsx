import React from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

type Review = {
  id: number
  content: string
  author: string
}

const reviews: Review[] = [
  {
    id: 1,
    content: "Amazing food and fantastic service! Highly recommended.",
    author: "John Doe",
  },
  {
    id: 2,
    content: "The ambiance was perfect and the dishes were exquisite.",
    author: "Jane Smith",
  },
  {
    id: 3,
    content: "A culinary delight! Every bite was a burst of flavor.",
    author: "Alex Johnson",
  },
  {
    id: 4,
    content: "The staff was incredibly attentive and the food was top-notch.",
    author: "Emily Davis",
  },
  {
    id: 5,
    content:
      "Best dining experience I've had in a long time. Will definitely return.",
    author: "Michael Brown",
  },
  {
    id: 6,
    content: "Loved the diverse menu and the quality of ingredients.",
    author: "Sarah Wilson",
  },
  {
    id: 7,
    content: "A true gastronomic adventure! Highly impressed.",
    author: "David Lee",
  },
  {
    id: 8,
    content: "Everything was perfect from start to finish. Great place!",
    author: "Linda Martinez",
  },
  {
    id: 9,
    content: "The flavors were out of this world. Exceptional restaurant.",
    author: "James Taylor",
  },
  {
    id: 10,
    content: "Impeccable service and delicious food. A must-visit spot.",
    author: "Patricia Anderson",
  },
]

const ReviewShowcase: React.FC = () => {
  const renderRow = (direction: "left" | "right") => (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "flex py-2",
          direction === "left" ? "animate-slide-left" : "animate-slide-right",
          "hover:pause-animation"
        )}
      >
        {reviews.slice(0, reviews.length / 2).map((review, index) => (
          <Card
            key={`${review.id}-${index}`}
            className="w-[280px] flex-shrink-0 mx-2"
          >
            <CardContent className="p-4">
              <p className="text-sm">{review.content}</p>
              <p className="text-xs mt-2 font-bold">{review.author}</p>
            </CardContent>
          </Card>
        ))}
        {reviews.slice(reviews.length / 2 + 1).map((review, index) => (
          <Card
            key={`${review.id}-${index}-repeat`}
            className="w-[280px] flex-shrink-0 mx-2"
          >
            <CardContent className="p-4">
              <p className="text-sm">{review.content}</p>
              <p className="text-xs mt-2 font-bold">{review.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full overflow-hidden">
      {renderRow("left")}
      {renderRow("right")}
    </div>
  )
}

export default ReviewShowcase
