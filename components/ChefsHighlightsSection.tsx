import Image from "next/image";
import { motion } from "framer-motion";
import { highlights } from "@/mock/highlights";

export function ChefsHighlightsSection() {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
          Destaques do Chef
        </h2>
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            className="flex flex-col md:flex-row items-center mb-20 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div
              className={`w-full md:w-1/2 mb-8 md:mb-0 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                />
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                {highlight.name}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
