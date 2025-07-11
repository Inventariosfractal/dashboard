import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen Ejecutivo</h2>
      </motion.div>

      {/* Separación clara entre datos oficiales y encuesta propia */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Datos Oficiales */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Datos Oficiales del DCH
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Docentes actuales:</span>
                <span className="font-semibold text-blue-900">15 profesores</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Matrículas proyectadas:</span>
                <span className="font-semibold text-blue-900">45 total</span>
              </div>
              <div className="text-xs text-blue-700 bg-blue-100 p-2 rounded">
                <strong>Distribución:</strong> 15 por carrera (Ciencias Políticas, Filosofía, Gestión Cultural)
              </div>
              <div className="text-xs text-blue-700">
                <strong>Nota:</strong> 3 profesores fueron trasladados a otros programas
              </div>
            </div>
          </div>
        </motion.div>

        {/* Datos de la Encuesta */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Resultados de la Consulta
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-green-800">Total respuestas:</span>
                <span className="font-semibold text-green-900">127</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">A favor inicial:</span>
                <span className="font-semibold text-green-900">15 docentes</span>
              </div>
              <div className="text-xs text-green-700 bg-green-100 p-2 rounded">
                <strong>Aclaración:</strong> Los 15 a favor corresponden a una consulta inicial realizada previamente
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Métricas principales */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Participación Total</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
              <p className="text-xs text-gray-500">respuestas válidas</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Apoyo a la Propuesta</p>
              <p className="text-2xl font-bold text-green-600">78.7%</p>
              <p className="text-xs text-gray-500">de las respuestas</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Costo Proyectado</p>
              <p className="text-2xl font-bold text-gray-900">$12.9M</p>
              <p className="text-xs text-gray-500">millones COP</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inquietudes</p>
              <p className="text-2xl font-bold text-orange-600">23</p>
              <p className="text-xs text-gray-500">pendientes</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Corrección de datos importantes */}
      <motion.div variants={itemVariants}>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-amber-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Correcciones Importantes
          </h3>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>• <strong>Gestión Cultural SÍ genera matrículas nuevas</strong> (15 proyectadas)</li>
            <li>• <strong>Docentes DCH actuales:</strong> 15 (no 17, debido a traslados)</li>
            <li>• <strong>Costo total corregido:</strong> $12.908 millones (no $41.953M)</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExecutiveSummary;