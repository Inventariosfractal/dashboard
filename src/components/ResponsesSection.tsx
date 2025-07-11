import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Eye, EyeOff, AlertTriangle, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const ResponsesSection: React.FC = () => {
  const [showCensoredComment, setShowCensoredComment] = useState(false);
  const [expandedInquiry, setExpandedInquiry] = useState<number | null>(null);
  const [showEmails, setShowEmails] = useState(false);

  const inquiries = [
    {
      id: 1,
      category: "Recursos Académicos",
      question: "¿Cómo se garantizará la calidad académica con el presupuesto propuesto?",
      response: "Se ha diseñado un plan de contratación de docentes con PhD y experiencia comprobada. El 65.8% del presupuesto se destina a personal docente calificado.",
      status: "Resuelta",
      department: "Filosofía"
    },
    {
      id: 2,
      category: "Infraestructura",
      question: "¿Las instalaciones actuales son suficientes para los tres programas?",
      response: "Se realizará una ampliación de 200m² en el edificio principal y se habilitarán 3 aulas especializadas adicionales.",
      status: "Resuelta",
      department: "Ciencias Políticas"
    },
    {
      id: 3,
      category: "Gestión Administrativa",
      question: "¿Cómo se coordinará la gestión entre los tres programas diferentes?",
      response: "Se implementará un sistema de coordinación académica con un director general y coordinadores por programa.",
      status: "Resuelta",
      department: "Gestión Cultural"
    },
    {
      id: 4,
      category: "Sostenibilidad Financiera",
      question: "¿Qué sucede si no se alcanzan las metas de matrícula proyectadas?",
      response: "Se ha establecido un plan de contingencia con metas mínimas de 30 estudiantes (10 por programa) para mantener viabilidad.",
      status: "Resuelta",
      department: "Ciencias Humanas"
    },
    {
      id: 5,
      category: "Investigación",
      question: "¿Cómo se fortalecerán las líneas de investigación interdisciplinaria?",
      response: "Pendiente de definición en comité académico. Se propone crear 2 grupos de investigación interdisciplinarios.",
      status: "Pendiente",
      department: "Filosofía"
    }
  ];

  const supportiveComments = [
    "Excelente propuesta que fortalecerá la oferta académica de la facultad",
    "Necesario para competir con otras universidades de la región",
    "Los programas propuestos tienen alta demanda en el mercado laboral",
    "Apoyo total, es momento de innovar en la educación superior"
  ];

  const emailList = [
    "juan.perez@universidad.edu.co",
    "maria.gonzalez@universidad.edu.co", 
    "carlos.rodriguez@universidad.edu.co",
    "ana.martinez@universidad.edu.co",
    "luis.hernandez@universidad.edu.co",
    "sofia.lopez@universidad.edu.co",
    "miguel.torres@universidad.edu.co",
    "laura.ramirez@universidad.edu.co"
  ];

  const censoredComment = "Este comentario fue removido por contener lenguaje inapropiado y no ajustarse a los estándares de respeto requeridos para la consulta académica.";

  return (
    <motion.section 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Respuestas y Comentarios</h2>
        <p className="text-gray-600">Análisis detallado de inquietudes, propuestas y comentarios recibidos</p>
      </div>

      {/* Inquietudes y Propuestas */}
      <motion.div 
        className="chart-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Inquietudes y Propuestas Detalladas
        </h3>
        
        <div className="space-y-4">
          {inquiries.map((inquiry, index) => (
            <motion.div
              key={inquiry.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
                  {expandedInquiry === inquiry.id ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
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
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Respuesta:</strong> {inquiry.response}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comentarios de Apoyo */}
      <motion.div 
        className="chart-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios de Apoyo</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportiveComments.map((comment, index) => (
            <motion.div
              key={index}
              className="p-4 bg-green-50 border border-green-200 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-green-800 italic">"{comment}"</p>
            </motion.div>
          ))}
        </div>

        {/* Comentario Censurado */}
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Comentario Removido
            </h4>
            <button
              onClick={() => setShowCensoredComment(!showCensoredComment)}
              className="flex items-center gap-1 text-xs text-red-700 hover:text-red-900 transition-colors duration-200"
            >
              {showCensoredComment ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              {showCensoredComment ? 'Ocultar' : 'Ver detalles'}
            </button>
          </div>
          
          <AnimatePresence>
            {showCensoredComment && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-red-100 rounded border-l-4 border-red-400">
                  <p className="text-xs text-red-800 blur-sm hover:blur-none transition-all duration-300 cursor-pointer">
                    {censoredComment}
                  </p>
                  <p className="text-xs text-red-600 mt-2">
                    <em>Haga clic para enfocar el texto</em>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Lista de Correos para Validación */}
      <motion.div 
        className="chart-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Validación de Respuestas
          </h3>
          <button
            onClick={() => setShowEmails(!showEmails)}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded hover:bg-blue-200 transition-colors duration-200"
          >
            {showEmails ? 'Ocultar correos' : 'Mostrar correos'}
          </button>
        </div>
        
        <div className="text-sm text-gray-600 mb-3">
          <p><strong>Total de correos registrados:</strong> {emailList.length} (muestra parcial)</p>
          <p>Lista disponible para validación de autenticidad de respuestas</p>
        </div>

        <AnimatePresence>
          {showEmails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {emailList.map((email, index) => (
                  <motion.div
                    key={index}
                    className="text-xs text-gray-700 font-mono bg-white p-2 rounded border"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    {email}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default ResponsesSection;