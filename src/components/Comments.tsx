import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Eye, EyeOff, AlertTriangle, Heart, ThumbsUp } from 'lucide-react';

const Comments: React.FC = () => {
  const [showCensoredComment, setShowCensoredComment] = useState(false);
  const [revealedComments, setRevealedComments] = useState<Set<number>>(() => new Set());

  // Comentarios completos extraídos del documento
  const supportiveComments = [
    {
      id: 1,
      text: "Excelente propuesta que fortalecerá la oferta académica de la facultad y permitirá mayor interdisciplinariedad entre programas afines",
      department: "Filosofía",
      sentiment: "positive"
    },
    {
      id: 2,
      text: "Necesario para competir con otras universidades de la región y mantener nuestra posición académica en el contexto nacional",
      department: "Ciencias Políticas", 
      sentiment: "positive"
    },
    {
      id: 3,
      text: "Los programas propuestos tienen alta demanda en el mercado laboral actual, especialmente en gestión cultural y análisis político",
      department: "Gestión Cultural",
      sentiment: "positive"
    },
    {
      id: 4,
      text: "Apoyo total, es momento de innovar en la educación superior y adaptarse a las nuevas realidades del siglo XXI",
      department: "Ciencias Humanas",
      sentiment: "positive"
    },
    {
      id: 5,
      text: "La propuesta es coherente con las tendencias internacionales en educación superior y permitirá mayor movilidad estudiantil",
      department: "Filosofía",
      sentiment: "positive"
    },
    {
      id: 6,
      text: "Permitirá optimizar recursos y crear sinergias entre programas afines, mejorando la eficiencia institucional",
      department: "Ciencias Políticas",
      sentiment: "positive"
    },
    {
      id: 7,
      text: "La interdisciplinariedad propuesta enriquecerá la formación de nuestros estudiantes y fortalecerá la investigación",
      department: "Ciencias Humanas",
      sentiment: "positive"
    },
    {
      id: 8,
      text: "Es una oportunidad única para posicionar a la FCHS como líder en innovación educativa en la región",
      department: "Gestión Cultural",
      sentiment: "positive"
    },
    {
      id: 9,
      text: "Los recursos destinados a infraestructura y tecnología mejorarán significativamente las condiciones de enseñanza",
      department: "Filosofía",
      sentiment: "positive"
    },
    {
      id: 10,
      text: "La propuesta responde a las necesidades del contexto regional y nacional, fortaleciendo el compromiso social de la universidad",
      department: "Ciencias Políticas",
      sentiment: "positive"
    }
  ];

  // Comentarios con preocupaciones constructivas del documento
  const constructiveComments = [
    {
      id: 11,
      text: "Es importante garantizar que cada programa mantenga su identidad académica específica y no se diluya en la integración",
      department: "Filosofía",
      sentiment: "neutral"
    },
    {
      id: 12,
      text: "Sugiero establecer mecanismos claros de evaluación y seguimiento del proceso de implementación para asegurar el éxito",
      department: "Gestión Cultural",
      sentiment: "neutral"
    },
    {
      id: 13,
      text: "Sería conveniente definir mejor los criterios de selección de docentes y los perfiles requeridos para cada programa",
      department: "Ciencias Humanas",
      sentiment: "neutral"
    },
    {
      id: 14,
      text: "Recomiendo fortalecer los vínculos con el sector productivo para garantizar la empleabilidad de los egresados",
      department: "Ciencias Políticas",
      sentiment: "neutral"
    },
    {
      id: 15,
      text: "Es necesario asegurar que la infraestructura tecnológica sea suficiente para soportar las nuevas modalidades educativas",
      department: "Gestión Cultural",
      sentiment: "neutral"
    }
  ];

  const censoredComment = "Este comentario contenía expresiones despectivas hacia la administración universitaria y lenguaje inapropiado que no se ajusta a los estándares de respeto y cordialidad requeridos para la consulta académica. El contenido fue removido para mantener un ambiente de diálogo constructivo y respetuoso entre todos los participantes.";

  const toggleCommentReveal = (commentId: number) => {
    const newRevealed = new Set(revealedComments || new Set());
    if (newRevealed.has(commentId)) {
      newRevealed.delete(commentId);
    } else {
      newRevealed.add(commentId);
    }
    setRevealedComments(newRevealed);
  };

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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comentarios y Observaciones</h2>
        <p className="text-gray-600">Análisis de los comentarios cualitativos recibidos durante la consulta</p>
      </motion.div>

      {/* Resumen de comentarios */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <div className="metric-card bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Comentarios Positivos</p>
              <p className="text-3xl font-bold text-green-900">{supportiveComments.length}</p>
              <p className="text-xs text-green-600">de apoyo</p>
            </div>
            <div className="p-3 bg-green-200 rounded-full">
              <ThumbsUp className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Sugerencias</p>
              <p className="text-3xl font-bold text-blue-900">{constructiveComments.length}</p>
              <p className="text-xs text-blue-600">constructivas</p>
            </div>
            <div className="p-3 bg-blue-200 rounded-full">
              <MessageSquare className="w-6 h-6 text-blue-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-red-50 to-red-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-700">Comentarios Removidos</p>
              <p className="text-3xl font-bold text-red-900">1</p>
              <p className="text-xs text-red-600">inapropiado</p>
            </div>
            <div className="p-3 bg-red-200 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">Tasa de Participación</p>
              <p className="text-3xl font-bold text-purple-900">85%</p>
              <p className="text-xs text-purple-600">con comentarios</p>
            </div>
            <div className="p-3 bg-purple-200 rounded-full">
              <Heart className="w-6 h-6 text-purple-700" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comentarios de Apoyo */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios de Apoyo</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportiveComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                  {comment.department}
                </span>
                <ThumbsUp className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-sm text-green-800 italic">"{comment.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sugerencias Constructivas */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sugerencias y Observaciones Constructivas</h3>
        
        <div className="space-y-4">
          {constructiveComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {comment.department}
                </span>
                <MessageSquare className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-sm text-blue-800">"{comment.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comentario Censurado */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Comentario Removido por Contenido Inapropiado
            </h4>
            <motion.button
              onClick={() => setShowCensoredComment(!showCensoredComment)}
              className="flex items-center gap-1 text-xs text-red-700 hover:text-red-900 transition-colors duration-200 px-2 py-1 bg-red-100 rounded hover:bg-red-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showCensoredComment ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              {showCensoredComment ? 'Ocultar' : 'Ver detalles'}
            </motion.button>
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
                  <motion.p 
                    className={`text-xs text-red-800 transition-all duration-300 cursor-pointer ${
                      revealedComments.has(999) ? '' : 'blur-sm'
                    }`}
                    onClick={() => toggleCommentReveal(999)}
                  >
                    {censoredComment}
                  </motion.p>
                  {!revealedComments.has(999) && (
                    <p className="text-xs text-red-600 mt-2">
                      <em>Haga clic en el texto para enfocarlo</em>
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Análisis cualitativo */}
      <motion.div 
        className="bg-gray-50 border border-gray-200 rounded-lg p-4"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Análisis Cualitativo</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Temas recurrentes en comentarios positivos:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fortalecimiento de la oferta académica</li>
            <li>Competitividad institucional</li>
            <li>Demanda del mercado laboral</li>
            <li>Innovación educativa</li>
            <li>Interdisciplinariedad</li>
            <li>Optimización de recursos</li>
          </ul>
          <p className="mt-3"><strong>Principales preocupaciones constructivas:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Preservación de identidad académica de cada programa</li>
            <li>Mecanismos de evaluación y seguimiento</li>
            <li>Criterios de selección docente</li>
            <li>Vínculos con sector productivo</li>
            <li>Infraestructura tecnológica</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Comments;