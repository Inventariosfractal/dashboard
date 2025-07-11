import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, AlertCircle, Info } from 'lucide-react';

const FinancialAnalysis: React.FC = () => {
  // Datos financieros corregidos
  const budgetItems = [
    { category: 'Personal Docente', amount: 8500, percentage: 65.8 },
    { category: 'Infraestructura', amount: 2200, percentage: 17.0 },
    { category: 'Equipamiento', amount: 1500, percentage: 11.6 },
    { category: 'Gastos Operativos', amount: 708, percentage: 5.5 }
  ];

  const totalBudget = 12908; // Costo real corregido
  const matriculasPorSemestre = 45; // ⚠️ CRÍTICO: 45 NUEVAS MATRÍCULAS POR SEMESTRE (15 por cada carrera)
  const costoPorEstudiante = Math.round(totalBudget / matriculasPorSemestre); // 287M por estudiante

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Análisis Financiero</h2>
        <p className="text-gray-600">Proyección de costos para la implementación de la propuesta del DCH</p>
      </motion.div>

      {/* Resumen financiero corregido */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <motion.div 
          className="metric-card bg-gradient-to-br from-green-50 to-green-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Costo Total Proyecto</p>
              <p className="text-3xl font-bold text-green-900">
                ${totalBudget.toLocaleString()}M
              </p>
              <p className="text-xs text-green-600">millones COP</p>
            </div>
            <div className="p-3 bg-green-200 rounded-full">
              <DollarSign className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card bg-gradient-to-br from-blue-50 to-blue-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Costo por Estudiante</p>
              <p className="text-3xl font-bold text-blue-900">
                ${costoPorEstudiante}M
              </p>
              <p className="text-xs text-blue-600">por semestre</p>
            </div>
            <div className="p-3 bg-blue-200 rounded-full">
              <TrendingUp className="w-6 h-6 text-blue-700" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card bg-gradient-to-br from-purple-50 to-purple-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">Estudiantes por Semestre</p>
              <p className="text-3xl font-bold text-purple-900">{matriculasPorSemestre}</p>
              <p className="text-xs text-purple-600">nuevas matrículas</p>
            </div>
            <div className="p-3 bg-purple-200 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-700" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Desglose detallado */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Desglose Presupuestario</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Categoría</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Monto (Millones)</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Porcentaje</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Distribución</th>
              </tr>
            </thead>
            <tbody>
              {budgetItems.map((item, index) => (
                <motion.tr 
                  key={item.category}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <td className="py-3 px-4 text-gray-900">{item.category}</td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-900">
                    ${item.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600">
                    {item.percentage}%
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                      />
                    </div>
                  </td>
                </motion.tr>
              ))}
              <tr className="border-t-2 border-gray-300 bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">TOTAL</td>
                <td className="py-3 px-4 text-right font-bold text-gray-900">
                  ${totalBudget.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right font-bold text-gray-900">100%</td>
                <td className="py-3 px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Nota sobre el cálculo */}
      <motion.div 
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Cálculo del Costo por Estudiante
        </h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Fórmula:</strong> Costo total del proyecto ÷ Estudiantes por semestre</p>
          <p><strong>Cálculo:</strong> ${totalBudget.toLocaleString()}M ÷ {matriculasPorSemestre} = ${costoPorEstudiante}M por estudiante</p>
          <p><strong>Distribución:</strong> 15 estudiantes por cada carrera (Ciencias Políticas, Filosofía, Gestión Cultural)</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FinancialAnalysis;