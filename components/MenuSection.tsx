import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { menuItems } from "@/mock/menuItems";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const categories = ["Todos", "Entradas", "Principais", "Sobremesas", "Bebidas"];

const sortOptions = {
  default: "Ordenar por",
  ratingHighToLow: "Avaliação: Maior para Menor",
  ratingLowToHigh: "Avaliação: Menor para Maior",
  priceLowToHigh: "Preço: Menor para Maior",
  priceHighToLow: "Preço: Maior para Menor",
};

export function MenuSection() {
  const [filter, setFilter] = useState("Todos");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const filteredAndSortedItems = menuItems
    .filter((item) => filter === "Todos" || item.category === filter)
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "ratingHighToLow") return b.rating - a.rating;
      if (sort === "ratingLowToHigh") return a.rating - b.rating;
      if (sort === "priceLowToHigh") return a.price - b.price;
      if (sort === "priceHighToLow") return b.price - a.price;
      return 0;
    });

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
          Nosso Cardápio
        </h2>
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 my-1 px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Input
              type="text"
              placeholder="Buscar pratos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger aria-label="Ordenar por">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(sortOptions).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredAndSortedItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-yellow-500">
                    R$ {item.price.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="ml-1 text-gray-600">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
