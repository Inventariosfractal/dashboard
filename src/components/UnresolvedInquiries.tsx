import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from 'lucide-react';

const UnresolvedInquiries: React.FC = () => {
  const [expandedInquiry, setExpandedInquiry] = useState<number | null>(null);

  // Inquietudes detalladas basadas en el documento
  const inquiries = [
    {
      id: 1,
      category: "Recursos Académicos",
      question: "¿Cómo se garantizará la calidad académica con el presupuesto propuesto de $12.908 millones?",
      response: "Se ha diseñado un plan de contratación de docentes con PhD y experiencia comprobada. El 65.8% del presupuesto ($8.500 millones) se destina específicamente a personal docente calificado, asegurando una relación estudiante-profesor adecuada y manteniendo los estándares de calidad académica.",
      status: "Resuelta",
      department: "Filosofía",
      details: "La inversión en personal docente representa la mayor parte del presupuesto, garantizando la contratación de profesores con formación doctoral y experiencia en investigación."
    },
    {
      id: 2,
      category: "Infraestructura",
      question: "¿Las instalaciones actuales son suficientes para atender 45 nuevas matrículas por semestre (360 estudiantes en 4 años)?",
      response: "Se realizará una ampliación de 200m² en el edificio principal y se habilitarán 3 aulas especializadas adicionales. La inversión en infraestructura ($2.200 millones) incluye laboratorios, biblioteca especializada y espacios de estudio colaborativo.",
      status: "Resuelta",
      department: "Ciencias Políticas",
      details: "El plan incluye remodelación de espacios existentes y construcción de nuevas áreas para garantizar capacidad suficiente para el crecimiento proyectado."
    },
    {
      id: 3,
      category: "Gestión Administrativa",
      question: "¿Cómo se coordinará la gestión entre los tres programas diferentes (Ciencias Políticas, Filosofía y Gestión Cultural)?",
      response: "Se implementará un sistema de coordinación académica con un director general del DCH y coordinadores específicos por programa. Se establecerán comités interdisciplinarios para proyectos transversales y se mantendrá la autonomía académica de cada programa.",
      status: "Resuelta",
      department: "Gestión Cultural",
      details: "La estructura organizacional permitirá mantener la identidad de cada programa mientras se aprovechan las sinergias interdisciplinarias."
    },
    {
      id: 4,
      category: "Sostenibilidad Financiera",
      question: "¿Qué sucede si no se alcanzan las metas de matrícula proyectadas de 45 estudiantes por semestre?",
      response: "Se ha establecido un plan de contingencia con metas mínimas de 30 estudiantes por semestre (10 por programa) para mantener viabilidad financiera. El modelo financiero incluye escenarios conservadores que garantizan sostenibilidad incluso con menor matrícula.",
      status: "Resuelta",
      department: "Ciencias Humanas",
      details: "Los cálculos financieros incluyen múltiples escenarios, desde el optimista (45/semestre) hasta el conservador (30/semestre)."
    },
    {
      id: 5,
      category: "Investigación",
      question: "¿Cómo se fortalecerán las líneas de investigación interdisciplinaria entre los tres programas?",
      response: "Se propone crear 2 grupos de investigación interdisciplinarios con financiación específica. Se establecerán convocatorias internas para proyectos colaborativos y se promoverá la participación en redes nacionales e internacionales de investigación.",
      status: "En desarrollo",
      department: "Filosofía",
      details: "Pendiente de definición final en comité académico. Se han identificado áreas temáticas de convergencia entre los tres programas."
    },
    {
      id: 6,
      category: "Empleabilidad",
      question: "¿Cuáles son las perspectivas laborales para los egresados de estos programas?",
      response: "Se han realizado estudios de mercado que muestran alta demanda en sector público, ONGs, medios de comunicación, consultoría y academia. Se establecerán convenios con instituciones para prácticas profesionales y bolsa de empleo.",
      status: "Resuelta",
      department: "Gestión Cultural",
      details: "Los estudios muestran tasas de empleabilidad superiores al 85% en programas similares a nivel nacional."
    }
  ];

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

  const resolvedCount = inquiries.filter(i => i.status === "Resuelta").length;
  const pendingCount = inquiries.filter(i => i.status === "En desarrollo").length;

  return (
    <motion.section 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Inquietudes y Propuestas</h2>
        <p className="text-gray-600">Análisis detallado de las principales inquietudes planteadas durante la consulta</p>
      </motion.div>

      {/* Resumen de estado */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <div className="metric-card bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Inquietudes Resueltas</p>
              <p className="text-3xl font-bold text-green-900">{resolvedCount}</p>
              <p className="text-xs text-green-600">de {inquiries.length} total</p>
            </div>
            <div className="p-3 bg-green-200 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-700">En Desarrollo</p>
              <p className="text-3xl font-bold text-yellow-900">{pendingCount}</p>
              <p className="text-xs text-yellow-600">pendientes</p>
            </div>
            <div className="p-3 bg-yellow-200 rounded-full">
              <AlertTriangle className="w-6 h-6 text-yellow-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Tasa de Resolución</p>
              <p className="text-3xl font-bold text-blue-900">{Math.round((resolvedCount/inquiries.length)*100)}%</p>
              <p className="text-xs text-blue-600">completadas</p>
            </div>
            <div className="p-3 bg-blue-200 rounded-full">
              <MessageSquare className="w-6 h-6 text-blue-700" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lista de inquietudes */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Inquietudes Detalladas
        </h3>
        
        <div className="space-y-4">
          {inquiries.map((inquiry, index) => (
            <motion.div
              key={inquiry.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div 
                className="p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setExpandedInquiry(expandedInquiry === inquiry.id ? null : inquiry.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {inquiry.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {inquiry.department}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        inquiry.status === 'Resuelta' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{inquiry.question}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedInquiry === inquiry.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </div>
              
              <AnimatePresence>
                {expandedInquiry === inquiry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-4 bg-white">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Respuesta:</p>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {inquiry.response}
                          </p>
                        </div>
                        {inquiry.details && (
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Detalles adicionales:</p>
                            <p className="text-sm text-gray-600 leading-relaxed italic">
                              {inquiry.details}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Nota metodológica */}
      <motion.div 
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Nota Metodológica</h3>
        <p className="text-sm text-blue-800">
          Las inquietudes fueron categorizadas y analizadas sistemáticamente. Cada respuesta fue elaborada 
          por el comité técnico del DCH y validada por expertos en cada área temática. Las inquietudes 
          marcadas como "En desarrollo" requieren decisiones adicionales del consejo académico.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default UnresolvedInquiries;