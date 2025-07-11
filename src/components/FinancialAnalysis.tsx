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
  const totalMatriculasCuatroAnos = matriculasPorSemestre * 8; // 45 estudiantes nuevos por semestre × 8 semestres = 360 estudiantes nuevos en 4 años
  
  // Total de estudiantes en el programa en estado estable (4 años completos)
  const totalEstudiantesPrograma = matriculasPorSemestre * 4; // 45 estudiantes por año × 4 años = 180 estudiantes totales
  
  const costoPorEstudianteCuatroAnos = totalBudget * 1000000 / totalMatriculasCuatroAnos; // Costo por estudiante nuevo
  const costoAnualPorEstudiante = costoPorEstudianteCuatroAnos / 4; // Costo anual por estudiante
  const costoPromedioUniversidadPublica = 2500000; // Costo promedio anual

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
                ${(costoPorEstudianteCuatroAnos/1000000).toFixed(1)}M
              </p>
              <p className="text-xs text-blue-600">4 años completos</p>
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
              <p className="text-sm font-medium text-purple-700">⚠️ Estudiantes Simultáneos</p>
              <p className="text-3xl font-bold text-purple-900">{totalEstudiantesPrograma}</p>
              <p className="text-xs text-purple-600">estado estable</p>
            </div>
            <div className="p-3 bg-purple-200 rounded-full">
              <TrendingUp className="w-6 h-6 text-purple-700" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Comparación con universidades públicas */}
      <motion.div 
        variants={itemVariants}
        className="bg-indigo-50 border border-indigo-200 rounded-lg p-4"
      >
        <h3 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Comparación con Universidades Públicas Colombianas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-indigo-700 mb-1">Costo promedio anual universidad pública:</p>
            <p className="text-xl font-bold text-indigo-900">${costoPromedioUniversidadPublica.toLocaleString()}</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm text-indigo-700 mb-1">Costo anual por estudiante DCH:</p>
            <p className="text-xl font-bold text-indigo-900">${costoAnualPorEstudiante.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-3 text-xs text-indigo-700 bg-indigo-100 p-2 rounded">
          <strong>Análisis:</strong> El costo por estudiante del DCH representa el {(costoAnualPorEstudiante / costoPromedioUniversidadPublica * 100).toFixed(1)}% 
          del promedio nacional, lo que indica una inversión {costoAnualPorEstudiante > costoPromedioUniversidadPublica ? 'superior' : 'competitiva'} 
          en educación superior.
        </div>
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

      {/* Detalles adicionales corregidos */}
      <motion.div 
        className="bg-red-50 border border-red-400 rounded-lg p-6"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          🚨 ACLARACIÓN CRÍTICA: 45 MATRÍCULAS NUEVAS POR SEMESTRE
        </h3>
        <div className="text-sm text-red-800 space-y-3 bg-red-100 p-4 rounded">
          <p className="text-lg font-bold">⚠️ IMPORTANTE: 45 son estudiantes NUEVOS por semestre (NO el total)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>🎓 Estudiantes nuevos por semestre:</strong> 45</p>
              <p className="text-xs">(15 Ciencias Políticas + 15 Filosofía + 15 Gestión Cultural)</p>
            </div>
            <div>
              <p><strong>📊 Total estudiantes nuevos en 4 años:</strong> {totalMatriculasCuatroAnos}</p>
              <p className="text-xs">(45 × 8 semestres)</p>
            </div>
            <div>
              <p><strong>🏫 Estudiantes simultáneos (estado estable):</strong> 180</p>
              <p className="text-xs">(45 por año × 4 años)</p>
            </div>
            <div>
              <p><strong>💰 Costo por estudiante nuevo (4 años):</strong> ${(costoPorEstudianteCuatroAnos/1000000).toFixed(1)}M</p>
              <p className="text-xs">Costo anual: ${costoAnualPorEstudiante.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="mt-3 text-xs text-red-700 bg-red-200 p-3 rounded font-bold">
          🚨 CRÍTICO: No confundir estudiantes nuevos por semestre (45) con total de estudiantes en el programa. 
          En estado estable habrá 180 estudiantes simultáneamente: 45 de primer año + 45 de segundo año + 45 de tercer año + 45 de cuarto año.
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FinancialAnalysis;