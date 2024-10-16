import { CheckCircle } from 'lucide-react'; 
import { motion } from 'framer-motion';

export function HowToFillWheel() {
  return (
    <motion.section 
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-8">Como Preencher a Roda da Vida</h2>
      
      <ul className="space-y-6">
        {[
          "Reflita sobre cada área da sua vida e avalie de 0 a 10 o seu nível de satisfação.",
          "Seja sincero consigo mesmo e evite comparar sua vida com a de outras pessoas.",
          "Pense em ações práticas para melhorar as áreas com pontuações mais baixas.",
          "Revise sua roda periodicamente para acompanhar seu progresso e ajustar suas metas."
        ].map((instruction, index) => (
          <motion.li 
            key={`instruction-${index + 1}`}
            className="flex items-start text-lg text-gray-700 bg-white rounded-lg p-4 shadow-sm transition-transform hover:shadow-md hover:scale-105"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <CheckCircle className="w-6 h-6 text-blue-500 mr-4" />
            <span>{instruction}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
