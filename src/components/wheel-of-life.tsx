"use client"

import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const backgroundColors = [
  'rgba(225, 29, 72, 0.5)', 
  'rgba(234, 88, 12, 0.5)', 
  'rgba(202, 138, 4, 0.5)', 
  'rgba(101, 163, 13, 0.5)',
  'rgba(5, 150, 105, 0.5)', 
  'rgba(22, 163, 74, 0.5)', 
  'rgba(6, 182, 212, 0.5)', 
  'rgba(2, 132, 199, 0.5)', 
  'rgba(37, 99, 235, 0.5)', 
  'rgba(124, 58, 237, 0.5)',
  'rgba(147, 51, 234, 0.5)',
  'rgba(192, 38, 211, 0.5)',
];

const borderColors = backgroundColors.map(color => color.replace('0.5', '1'));

export function WheelOfLife() {
  const [values, setValues] = useState<Record<string, number>>({
    espiritualidade: 5,
    parentes: 5,
    conjugal: 5,
    filhos: 5,
    social: 5,
    servir: 5,
    intelectual: 5,
    financeiro: 5,
    profissional: 5,
    pessoal: 5,
    lazer: 5,
    disposicao: 5,
  });

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Math.min(Math.max(Number(value), 0), 10);

    setValues({
      ...values,
      [name]: numValue,
    });
  };

  const data = {
    labels: [
      'Espiritualidade',
      'Parentes',
      'Conjugal',
      'Filhos',
      'Social',
      'Servir',
      'Intelectual',
      'Financeiro',
      'Profissional',
      'Pessoal',
      'Lazer',
      'Disposição',
    ],
    datasets: [
      {
        label: 'Roda da Vida',
        data: Object.values(values),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const handleSave = () => {
    setErrorMessage('');

    if (!email || !name) {
      setErrorMessage('Por favor, preencha seu nome e email antes de salvar.');
      return;
    }

    console.log('Valores da Roda da Vida salvos:', values);
    console.log('Email:', email);
    console.log('Nome:', name);
  };

  return (

    <div className="container mx-auto py-12 px-6">
      <motion.h1
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Preencha sua Roda da Vida
      </motion.h1>

      <motion.div
        className="w-full lg:w-2/3 mx-auto mb-8 p-6 bg-white rounded-lg shadow-lg flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PolarArea data={data} />
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.keys(values).map((key) => (
          <motion.div 
            key={key}
            className="flex flex-col items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Label htmlFor={key} className="capitalize font-semibold text-gray-700">{key}</Label>
            <Input
              type="number"
              id={key}
              name={key}
              value={values[key]}
              onChange={handleInputChange}
              min="0"
              max="10"
              className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
        ))}

        <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button
          onClick={handleSave}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Salvar
        </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Salvar Roda da Vida</AlertDialogTitle>
          <AlertDialogDescription>Antes de salvar,</AlertDialogDescription>

            </AlertDialogHeader>

            <h2 className="text-xl font-bold mb-4">Informações Pessoais</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <Label htmlFor="name" className="font-semibold">Nome</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <Label htmlFor="email" className="font-semibold">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />

            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <Button
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Confirmar
              </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
      </motion.div>
    </div>

  );
}
