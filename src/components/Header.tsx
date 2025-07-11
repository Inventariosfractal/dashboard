import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Calendar, Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="bg-white shadow-sm border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Dashboard Encuesta FCHS
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Análisis de la consulta sobre la propuesta del Departamento de Ciencias Humanas
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Período: Noviembre 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Total Respuestas: 127</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;