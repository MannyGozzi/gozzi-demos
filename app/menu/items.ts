export interface IMenuItem {
  title: string
  calories: number
  protein: number
  carbs: number
  fats: number
  price: number
  description: string
  allergies: string[]
  image?: string
}

export const foodItems: IMenuItem[] = [
  {
    title: "Spaghetti Carbonara",
    calories: 800,
    protein: 30,
    carbs: 100,
    fats: 40,
    price: 12,
    description: "Spaghetti with pancetta, eggs, and cheese",
    allergies: ["dairy", "eggs"],
    image: "/images/spaghetti.jpg",
  },
  {
    title: "Lasagna",
    calories: 900,
    protein: 40,
    carbs: 120,
    fats: 50,
    price: 15,
    description: "Lasagna with beef, tomato sauce, and cheese",
    allergies: ["dairy", "gluten"],
    image: "/images/lasagna.jpg",
  },
  {
    title: "Fettuccine Alfredo",
    calories: 1000,
    protein: 35,
    carbs: 130,
    fats: 60,
    price: 14,
    description: "Fettuccine with cream, butter, and cheese",
    allergies: ["dairy", "gluten"],
    image: "/images/fettuccine.jpg",
  },
  {
    title: "Ravioli",
    calories: 700,
    protein: 25,
    carbs: 90,
    fats: 30,
    price: 13,
    description: "Ravioli with ricotta and spinach",
    allergies: ["dairy", "gluten"],
    image: "/images/ravioli.jpg",
  },
  {
    title: "Penne Arrabbiata",
    calories: 750,
    protein: 20,
    carbs: 100,
    fats: 35,
    price: 11,
    description: "Penne with spicy tomato sauce",
    allergies: ["gluten"],
    image: "/images/penne.jpg",
  },
  {
    title: "Gnocchi",
    calories: 850,
    protein: 30,
    carbs: 110,
    fats: 40,
    price: 13,
    description: "Gnocchi with tomato sauce and cheese",
    allergies: ["dairy", "gluten"],
    image: "/images/gnocchi.jpg",
  },
]

export const desertItems: IMenuItem[] = [
  {
    title: "Tiramisu",
    calories: 500,
    protein: 10,
    carbs: 70,
    fats: 20,
    price: 8,
    description: "Classic Italian dessert made with coffee and mascarpone",
    allergies: ["dairy", "eggs"],
    image: "/images/tiramisu.jpg",
  },
  {
    title: "Gelato",
    calories: 300,
    protein: 5,
    carbs: 40,
    fats: 10,
    price: 5,
    description: "Italian-style ice cream",
    allergies: ["dairy"],
    image: "/images/gelato.jpg",
  },
  {
    title: "Creme Brulee",
    calories: 700,
    protein: 10,
    carbs: 20,
    fats: 30,
    price: 9,
    description: "Rich custard topped with caramelized sugar",
    allergies: ["dairy", "eggs"],
    image: "/images/cremeBrulee.jpg",
  },
]
