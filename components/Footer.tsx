import { Facebook, Instagram, Twitter } from "@styled-icons/boxicons-logos";
import { motion } from "framer-motion";
import { Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              Restaurante Sabor & Arte
            </h3>
            <p>Rua das Delícias, 123</p>
            <p>Cidade Gourmet - SP</p>
            <p>CEP: 12345-678</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Clock size={24} className="mr-2" />
              Horário de Funcionamento
            </h3>
            <p>Segunda a Sexta: 11h30 - 23h00</p>
            <p>Sábado e Domingo: 11h30 - 00h00</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Phone size={24} className="mr-2" />
              Contato
            </h3>
            <p className="flex items-center">Telefone: (11) 1234-5678</p>
            <p className="flex items-center">Email: contato@restaurante.com</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Facebook size={24} /> Facebook
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Instagram size={24} /> Instagram
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <Twitter size={24} /> Twitter
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            &copy; 2024 Restaurante Sabor & Arte. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
