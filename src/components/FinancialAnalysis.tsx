import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

const FinancialAnalysis: React.FC = () => {
  const budgetItems = [
    { category: 'Personal Docente', amount: 8500, percentage: 65.8 },
    { category: 'Infraestructura', amount: 2200, percentage: 17.0 },
    { category: 'Equipamiento', amount: 1500, percentage: 11.6 },
    { category: 'Gastos Operativos', amount: 708, percentage: 5.5 }
  ];

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <motion.section 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Análisis Financiero</h2>
        <p className="text-gray-600">Proyección de costos para la implementación de la propuesta</p>
      </div>

      {/* Resumen financiero corregido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          className="metric-card bg-gradient-to-br from-green-50 to-green-100"
          whileHover={{ scale: 1.05 }}
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
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Costo por Estudiante</p>
              <p className="text-3xl font-bold text-blue-900">
                ${Math.round(totalBudget / 45).toLocaleString()}K
              </p>
              <p className="text-xs text-blue-600">miles COP/año</p>
            </div>
            <div className="p-3 bg-blue-200 rounded-full">
              <TrendingUp className="w-6 h-6 text-blue-700" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card bg-gradient-to-br from-purple-50 to-purple-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">ROI Proyectado</p>
              <p className="text-3xl font-bold text-purple-900">3.2x</p>
              <p className="text-xs text-purple-600">en 5 años</p>
            </div>
            <div className="p-3 bg-purple-200 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-700" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desglose detallado */}
      <motion.div 
        className="chart-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
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

      {/* Aclaración sobre el error anterior */}
      <motion.div 
        className="bg-red-50 border border-red-200 rounded-lg p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Corrección de Error Anterior
        </h3>
        <div className="text-sm text-red-800">
          <p><strong>Error identificado:</strong> En versiones anteriores se mostraba un total de $41.953M</p>
          <p><strong>Corrección:</strong> El costo real del proyecto es de ${totalBudget.toLocaleString()}M</p>
          <p className="text-xs text-red-700 mt-2">
            <em>El error se debía a una suma incorrecta en la columna de totales. Los valores individuales eran correctos.</em>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FinancialAnalysis;