import { Lightbulb, CheckCircle, Target } from 'lucide-react'; 
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { HowToFillWheel } from './how-to-fill';

export function Introduction() {
  return (
    <div className="container mx-auto py-12 px-6">
      <motion.section 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Descubra o Equilíbrio com a Roda da Vida</h1>
        <p className="text-lg text-gray-700">
          A Ferramenta Roda da Vida é uma poderosa ferramenta de coaching para visualizar e equilibrar as diferentes áreas da sua vida.
        </p>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card 
            className="text-center shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
            tabIndex={0}
          >
            <CardHeader>
              <Lightbulb className="w-12 h-12 mx-auto text-blue-500" aria-hidden="true" />
              <CardTitle className="mt-4 text-xl">Autoconhecimento</CardTitle>
            </CardHeader>
            <CardContent>
              A roda te ajuda a identificar áreas fortes e as que precisam de mais atenção, promovendo clareza.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card 
            className="text-center shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-green-500"
            tabIndex={0}
          >
            <CardHeader>
              <CheckCircle className="w-12 h-12 mx-auto text-green-500" aria-hidden="true" />
              <CardTitle className="mt-4 text-xl">Equilíbrio Pessoal</CardTitle>
            </CardHeader>
            <CardContent>
              Ao preencher a roda, você visualiza o nível de satisfação em cada área, promovendo harmonia.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card 
            className="text-center shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-red-500"
            tabIndex={0}
          >
            <CardHeader>
              <Target className="w-12 h-12 mx-auto text-red-500" aria-hidden="true" />
              <CardTitle className="mt-4 text-xl">Metas Claras</CardTitle>
            </CardHeader>
            <CardContent>
              Use a roda para definir metas específicas e criar um plano de ação para atingir seus objetivos.
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

    <HowToFillWheel />
    </div>
  );
}
