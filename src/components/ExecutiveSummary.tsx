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

  // DATOS CORREGIDOS - 45 ESTUDIANTES POR SEMESTRE
  const matriculasPorSemestre = 45; // 15 por cada carrera
  const costoTotalProyecto = 12908; // millones COP
  const costoPorEstudiante = Math.round(costoTotalProyecto / matriculasPorSemestre); // 287M por estudiante
  const docentesActualesDCH = 15;
  const totalDocentesUniversidad = 248;
  const participacionDocente = Math.round((127/248)*100); // 51%
  
  // DATOS ENCUESTA: 127 total (108 encuesta propia + 19 otras fuentes)
  const totalRespuestas = 127;
  const encuestaPropiaRespuestas = 108;
  const otrasRespuestas = 19;

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

      {/* Datos oficiales vs encuesta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Datos Oficiales del DCH
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Docentes actuales DCH:</span>
                <span className="font-semibold text-blue-900">{docentesActualesDCH} profesores</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Matrículas nuevas por semestre:</span>
                <span className="font-semibold text-blue-900">{matriculasPorSemestre}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800">Total docentes universidad:</span>
                <span className="font-semibold text-blue-900">{totalDocentesUniversidad}</span>
              </div>
              <div className="text-xs text-blue-700 bg-blue-100 p-2 rounded">
                <strong>Distribución por carrera:</strong> 15 Ciencias Políticas + 15 Filosofía + 15 Gestión Cultural = {matriculasPorSemestre} nuevas matrículas/semestre
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Resultados de la Consulta
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-green-800">Total respuestas:</span>
                <span className="font-semibold text-green-900">{totalRespuestas}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">Participación docente:</span>
                <span className="font-semibold text-green-900">{participacionDocente}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">A favor de la propuesta:</span>
                <span className="font-semibold text-green-900">78.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800">Encuesta propia:</span>
                <span className="font-semibold text-green-900">{encuestaPropiaRespuestas} participantes</span>
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
              <p className="text-2xl font-bold text-gray-900">{totalRespuestas}</p>
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
              <p className="text-sm font-medium text-gray-600">Estudiantes por Semestre</p>
              <p className="text-2xl font-bold text-green-600">{matriculasPorSemestre}</p>
              <p className="text-xs text-gray-500">nuevas matrículas</p>
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
              <p className="text-2xl font-bold text-orange-600">${costoPorEstudiante}M</p>
              <p className="text-xs text-gray-500">por estudiante</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Datos básicos corregidos */}
      <motion.div variants={itemVariants}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            ✅ DATOS BÁSICOS CORREGIDOS
          </h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• <strong>45 estudiantes nuevos por semestre:</strong> 15 por cada carrera (Ciencias Políticas, Filosofía, Gestión Cultural)</li>
            <li>• <strong>{encuestaPropiaRespuestas} participantes en encuesta propia:</strong> De {totalRespuestas} respuestas totales</li>
            <li>• <strong>248 docentes invitados:</strong> {participacionDocente}% de participación ({totalRespuestas} respuestas)</li>
            <li>• <strong>Costo por estudiante:</strong> ${costoPorEstudiante}M (${costoTotalProyecto}M ÷ {matriculasPorSemestre})</li>
            <li>• <strong>78.7% apoyo a la propuesta:</strong> Nivel exitoso para procesos institucionales</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExecutiveSummary;