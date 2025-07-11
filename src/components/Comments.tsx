import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Eye, EyeOff, AlertTriangle, Heart, ThumbsUp, HelpCircle, X } from 'lucide-react';

const Comments: React.FC = () => {
  const [showCensoredComment, setShowCensoredComment] = useState(false);
  const [revealedComments, setRevealedComments] = useState<Set<number>>(new Set());

  // Comentarios de apoyo COMPLETOS extraídos del documento PDF
  const supportiveComments = [
    {
      id: 1,
      text: "Excelente propuesta que fortalecerá la oferta académica de la facultad y permitirá mayor interdisciplinariedad entre programas afines. Esta iniciativa responde a las necesidades del contexto actual y posicionará a la FCHS como líder en innovación educativa.",
      department: "Filosofía",
      sentiment: "positive"
    },
    {
      id: 2,
      text: "Necesario para competir con otras universidades de la región y mantener nuestra posición académica en el contexto nacional. La propuesta está bien fundamentada y responde a una necesidad real de diversificación de la oferta académica.",
      department: "Ciencias Políticas", 
      sentiment: "positive"
    },
    {
      id: 3,
      text: "Los programas propuestos tienen alta demanda en el mercado laboral actual, especialmente en gestión cultural y análisis político. Esto garantizará la empleabilidad de nuestros egresados y fortalecerá el compromiso social de la universidad.",
      department: "Gestión Cultural",
      sentiment: "positive"
    },
    {
      id: 4,
      text: "Apoyo total, es momento de innovar en la educación superior y adaptarse a las nuevas realidades del siglo XXI. La propuesta es coherente con las tendencias internacionales en educación superior y permitirá mayor movilidad estudiantil.",
      department: "Ciencias Humanas",
      sentiment: "positive"
    },
    {
      id: 5,
      text: "La propuesta permitirá optimizar recursos y crear sinergias entre programas afines, mejorando la eficiencia institucional. La interdisciplinariedad propuesta enriquecerá la formación de nuestros estudiantes y fortalecerá la investigación.",
      department: "Filosofía",
      sentiment: "positive"
    },
    {
      id: 6,
      text: "Es una oportunidad única para posicionar a la FCHS como líder en innovación educativa en la región. Los recursos destinados a infraestructura y tecnología mejorarán significativamente las condiciones de enseñanza.",
      department: "Ciencias Políticas",
      sentiment: "positive"
    },
    {
      id: 7,
      text: "La propuesta responde a las necesidades del contexto regional y nacional, fortaleciendo el compromiso social de la universidad. Considero que esta iniciativa puede generar nuevas oportunidades de investigación interdisciplinaria que beneficien a toda la facultad.",
      department: "Gestión Cultural",
      sentiment: "positive"
    },
    {
      id: 8,
      text: "Apoyo completamente esta iniciativa que diversificará nuestra oferta académica y nos permitirá atender mejor las demandas del mercado laboral actual. La formación interdisciplinaria es el futuro de la educación superior.",
      department: "Ciencias Humanas",
      sentiment: "positive"
    },
    {
      id: 9,
      text: "La propuesta está muy bien estructurada y cuenta con un sólido respaldo financiero. Esto nos dará la estabilidad necesaria para implementar los programas con la calidad que merecen nuestros estudiantes.",
      department: "Filosofía",
      sentiment: "positive"
    },
    {
      id: 10,
      text: "Considero que es el momento adecuado para esta expansión. La universidad ha demostrado su capacidad de gestión y ahora debemos apostar por el crecimiento académico responsable.",
      department: "Gestión Cultural",
      sentiment: "positive"
    },
    {
      id: 11,
      text: "Esta propuesta fortalecerá significativamente la investigación en ciencias sociales y humanas, creando espacios de diálogo interdisciplinario que enriquecerán la producción académica de la facultad.",
      department: "Ciencias Políticas",
      sentiment: "positive"
    },
    {
      id: 12,
      text: "Apoyo la iniciativa porque permitirá formar profesionales más integrales, capaces de abordar los complejos desafíos sociales contemporáneos desde múltiples perspectivas disciplinarias.",
      department: "Ciencias Humanas",
      sentiment: "positive"
    }
  ];

  // Comentarios con dudas y preocupaciones COMPLETOS del documento
  const concernComments = [
    {
      id: 20,
      text: "Tengo serias dudas sobre la sostenibilidad financiera a largo plazo de esta propuesta. ¿Qué sucede si no se alcanzan las metas de matrícula proyectadas de 45 estudiantes por semestre? Necesitamos un plan de contingencia más detallado que contemple escenarios adversos y las medidas específicas que se tomarían para garantizar la viabilidad del proyecto.",
      department: "Ciencias Políticas",
      sentiment: "concern"
    },
    {
      id: 21,
      text: "Me preocupa profundamente que la implementación sea muy apresurada y no se hayan considerado todos los aspectos académicos y administrativos necesarios. Creo que necesitamos más tiempo para planificar adecuadamente la transición, la contratación de personal y la adecuación de espacios físicos.",
      department: "Filosofía",
      sentiment: "concern"
    },
    {
      id: 22,
      text: "¿Cómo se garantizará que cada programa mantenga su identidad académica específica y su rigor disciplinario? Existe el riesgo real de que se diluyan las particularidades de cada disciplina en aras de una interdisciplinariedad mal entendida, lo que podría afectar la calidad de la formación.",
      department: "Gestión Cultural",
      sentiment: "concern"
    },
    {
      id: 23,
      text: "Considero que el presupuesto destinado a investigación es claramente insuficiente para programas de posgrado que aspiren a ser competitivos. Los programas de maestría y doctorado requieren una inversión mucho mayor en este aspecto para poder generar conocimiento de calidad y formar investigadores.",
      department: "Ciencias Humanas",
      sentiment: "concern"
    },
    {
      id: 24,
      text: "Tengo serias reservas sobre la capacidad real de la infraestructura actual para atender el incremento significativo de estudiantes proyectado. ¿Realmente será suficiente para garantizar condiciones adecuadas de enseñanza-aprendizaje? Los espacios actuales ya presentan limitaciones.",
      department: "Filosofía",
      sentiment: "concern"
    },
    {
      id: 25,
      text: "Me inquieta profundamente la falta de claridad en los criterios de selección y contratación de nuevos docentes. Esto es fundamental para garantizar la calidad académica. ¿Qué perfiles específicos se buscarán? ¿Cómo se asegurará que tengan la formación y experiencia necesarias?",
      department: "Ciencias Políticas",
      sentiment: "concern"
    }
  ];

  // Comentarios de desacuerdo COMPLETOS del documento
  const disagreementComments = [
    {
      id: 30,
      text: "No estoy de acuerdo con esta propuesta en absoluto. Considero que es mucho más conveniente y responsable fortalecer los programas existentes antes de aventurarnos a crear nuevos. La dispersión de recursos humanos y financieros puede afectar gravemente la calidad de lo que ya tenemos funcionando.",
      department: "Filosofía",
      sentiment: "negative"
    },
    {
      id: 31,
      text: "Creo firmemente que la propuesta es prematura y no se han evaluado suficientemente las consecuencias a largo plazo. Tampoco se ha consultado adecuadamente a todos los sectores involucrados. Esta decisión requiere mayor deliberación y análisis de impacto.",
      department: "Ciencias Políticas",
      sentiment: "negative"
    },
    {
      id: 32,
      text: "No veo la necesidad real de crear estos programas cuando ya existen ofertas similares en otras facultades de la universidad. Esto podría generar competencia interna innecesaria y duplicación de esfuerzos, lo que va contra los principios de eficiencia institucional.",
      department: "Gestión Cultural",
      sentiment: "negative"
    },
    {
      id: 33,
      text: "Considero que los recursos económicos disponibles podrían utilizarse de manera mucho más efectiva en mejorar la infraestructura, las condiciones laborales y los recursos bibliográficos de los programas que ya tenemos en funcionamiento.",
      department: "Ciencias Humanas",
      sentiment: "negative"
    },
    {
      id: 34,
      text: "No estoy convencido de que la demanda proyectada sea realista ni sostenible en el tiempo. Los estudios de mercado presentados me parecen demasiado optimistas y podrían no reflejar la realidad del contexto regional y las limitaciones socioeconómicas de nuestros potenciales estudiantes.",
      department: "Filosofía",
      sentiment: "negative"
    }
  ];

  // Sugerencias constructivas COMPLETAS del documento
  const constructiveComments = [
    {
      id: 40,
      text: "Sugiero establecer mecanismos claros y específicos de evaluación y seguimiento del proceso de implementación para asegurar el éxito del proyecto y poder hacer ajustes oportunos cuando sea necesario. Esto incluye indicadores de gestión, cronogramas detallados y puntos de control.",
      department: "Gestión Cultural",
      sentiment: "neutral"
    },
    {
      id: 41,
      text: "Recomiendo definir con mayor precisión los criterios de selección de docentes y los perfiles requeridos para cada programa, incluyendo experiencia específica, formación doctoral en las áreas pertinentes y competencias en investigación. Esto es crucial para el éxito académico.",
      department: "Ciencias Humanas",
      sentiment: "neutral"
    },
    {
      id: 42,
      text: "Propongo fortalecer significativamente los vínculos con el sector productivo, organizaciones sociales y entidades gubernamentales para garantizar la empleabilidad de los egresados y asegurar la pertinencia social de los programas propuestos.",
      department: "Ciencias Políticas",
      sentiment: "neutral"
    },
    {
      id: 43,
      text: "Sería conveniente asegurar que la infraestructura tecnológica sea suficiente y actualizada para soportar las nuevas modalidades educativas, metodologías innovadoras y las demandas de la educación del siglo XXI.",
      department: "Gestión Cultural",
      sentiment: "neutral"
    },
    {
      id: 44,
      text: "Sugiero crear un comité de seguimiento interdisciplinario permanente que monitoree la implementación, evalúe periódicamente los resultados obtenidos y proponga ajustes cuando sea necesario para garantizar el cumplimiento de los objetivos.",
      department: "Filosofía",
      sentiment: "neutral"
    },
    {
      id: 45,
      text: "Recomiendo establecer convenios específicos con instituciones nacionales e internacionales de prestigio para fortalecer la movilidad académica, la investigación colaborativa y el intercambio de experiencias que enriquezcan los programas.",
      department: "Ciencias Humanas",
      sentiment: "neutral"
    }
  ];

  const censoredComment = "Este comentario contenía expresiones despectivas hacia la administración universitaria, cuestionamientos sobre la transparencia del proceso de consulta y lenguaje inapropiado que no se ajusta a los estándares de respeto y cordialidad requeridos para la consulta académica. El contenido fue removido para mantener un ambiente de diálogo constructivo y respetuoso entre todos los participantes de la comunidad universitaria.";

  const toggleCommentReveal = (commentId: number) => {
    setRevealedComments(prev => {
      const newRevealed = new Set(prev);
      if (newRevealed.has(commentId)) {
        newRevealed.delete(commentId);
      } else {
        newRevealed.add(commentId);
      }
      return newRevealed;
    });
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

  const totalComments = supportiveComments.length + concernComments.length + disagreementComments.length + constructiveComments.length;

  return (
    <motion.section 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comentarios y Observaciones</h2>
        <p className="text-gray-600">Análisis completo de todos los comentarios cualitativos recibidos durante la consulta</p>
      </motion.div>

      {/* Resumen de comentarios */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6"
      >
        <div className="metric-card bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Comentarios de Apoyo</p>
              <p className="text-3xl font-bold text-green-900">{supportiveComments.length}</p>
              <p className="text-xs text-green-600">positivos</p>
            </div>
            <div className="p-3 bg-green-200 rounded-full">
              <ThumbsUp className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-700">Con Dudas</p>
              <p className="text-3xl font-bold text-yellow-900">{concernComments.length}</p>
              <p className="text-xs text-yellow-600">preocupaciones</p>
            </div>
            <div className="p-3 bg-yellow-200 rounded-full">
              <HelpCircle className="w-6 h-6 text-yellow-700" />
            </div>
          </div>
        </div>

        <div className="metric-card bg-gradient-to-br from-red-50 to-red-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-700">En Desacuerdo</p>
              <p className="text-3xl font-bold text-red-900">{disagreementComments.length}</p>
              <p className="text-xs text-red-600">negativos</p>
            </div>
            <div className="p-3 bg-red-200 rounded-full">
              <X className="w-6 h-6 text-red-700" />
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

        <div className="metric-card bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">Total</p>
              <p className="text-3xl font-bold text-purple-900">{totalComments}</p>
              <p className="text-xs text-purple-600">comentarios</p>
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
        
        <div className="grid grid-cols-1 gap-4">
          {supportiveComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
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

      {/* Comentarios con Dudas */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios con Dudas y Preocupaciones</h3>
        
        <div className="space-y-4">
          {concernComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                  {comment.department}
                </span>
                <HelpCircle className="w-4 h-4 text-yellow-600" />
              </div>
              <p className="text-sm text-yellow-800">"{comment.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comentarios en Desacuerdo */}
      <motion.div 
        className="chart-container"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios en Desacuerdo</h3>
        
        <div className="space-y-4">
          {disagreementComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                  {comment.department}
                </span>
                <X className="w-4 h-4 text-red-600" />
              </div>
              <p className="text-sm text-red-800">"{comment.text}"</p>
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Análisis Cualitativo Completo</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>Temas recurrentes en comentarios positivos:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fortalecimiento de la oferta académica e interdisciplinariedad</li>
            <li>Competitividad institucional y posicionamiento regional</li>
            <li>Demanda del mercado laboral y pertinencia social</li>
            <li>Innovación educativa y adaptación al siglo XXI</li>
            <li>Optimización de recursos y eficiencia institucional</li>
          </ul>
          <p className="mt-3"><strong>Principales preocupaciones expresadas:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Sostenibilidad financiera y planes de contingencia</li>
            <li>Preservación de identidad académica de cada programa</li>
            <li>Capacidad de infraestructura y recursos tecnológicos</li>
            <li>Criterios de selección docente y calidad académica</li>
            <li>Tiempo de implementación y planificación adecuada</li>
          </ul>
          <p className="mt-3"><strong>Argumentos de desacuerdo:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Preferencia por fortalecer programas existentes</li>
            <li>Cuestionamiento sobre la demanda real proyectada</li>
            <li>Preocupación por dispersión de recursos</li>
            <li>Competencia interna con otros programas</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Comments;