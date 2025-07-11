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

  // Datos corregidos basados en el documento
  const totalMatriculasCuatroAnos = 45 * 8; // 45 por semestre x 8 semestres
  const costoTotalProyecto = 12908; // millones COP
  const costoPorEstudianteCuatroAnos = Math.round(costoTotalProyecto / totalMatriculasCuatroAnos * 1000000); // en pesos
  const costoPromedioUniversidadPublica = 2500000; // Costo promedio anual en universidad pública colombiana

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
                <span className="text-blue-800">Matrículas por semestre:</span>
                <span className="font-semibold text-blue-900">45 nuevas</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Total docentes planta FCHS:</span>
                <span className="font-semibold text-blue-900">248 profesores</span>
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

      {/* Métricas principales corregidas */}
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
              <p className="text-sm font-medium text-gray-600">Matrículas 4 años</p>
              <p className="text-2xl font-bold text-green-600">{totalMatriculasCuatroAnos}</p>
              <p className="text-xs text-gray-500">estudiantes total</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Costo Total</p>
              <p className="text-2xl font-bold text-gray-900">${costoTotalProyecto.toLocaleString()}M</p>
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
              <p className="text-sm font-medium text-gray-600">Costo/Estudiante</p>
              <p className="text-2xl font-bold text-orange-600">${(costoPorEstudianteCuatroAnos/1000000).toFixed(1)}M</p>
              <p className="text-xs text-gray-500">4 años/estudiante</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comparación con universidades públicas */}
      <motion.div variants={itemVariants}>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Comparación con Universidades Públicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-purple-800"><strong>Costo promedio anual universidad pública:</strong></p>
              <p className="text-xl font-bold text-purple-900">${costoPromedioUniversidadPublica.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-purple-800"><strong>Costo anual por estudiante DCH:</strong></p>
              <p className="text-xl font-bold text-purple-900">${(costoPorEstudianteCuatroAnos/4).toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-purple-700 bg-purple-100 p-2 rounded">
            El costo por estudiante del DCH está {((costoPorEstudianteCuatroAnos/4) / costoPromedioUniversidadPublica * 100).toFixed(1)}% 
            {(costoPorEstudianteCuatroAnos/4) > costoPromedioUniversidadPublica ? ' por encima' : ' por debajo'} del promedio nacional
          </div>
        </div>
      </motion.div>

      {/* Corrección de datos importantes */}
      <motion.div variants={itemVariants}>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-amber-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Datos Corregidos
          </h3>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>• <strong>Gestión Cultural SÍ genera matrículas nuevas</strong> (15 por semestre)</li>
            <li>• <strong>Docentes DCH actuales:</strong> 15 (no 17, debido a traslados)</li>
            <li>• <strong>Matrículas por semestre:</strong> 45 nuevas (15 por carrera)</li>
            <li>• <strong>Total estudiantes en 4 años:</strong> {totalMatriculasCuatroAnos}</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExecutiveSummary;