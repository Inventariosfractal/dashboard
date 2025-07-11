import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, HelpCircle, X, Heart } from 'lucide-react';

const Comments: React.FC = () => {
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

  // COMENTARIOS COMPLETOS SIN CENSURA
  const supportiveComments = [
    {
      id: 1,
      text: "Excelente propuesta que fortalecerá la oferta académica de la facultad y permitirá mayor interdisciplinariedad entre programas afines. Esta iniciativa responde a las necesidades del contexto actual y posicionará a la FCHS como líder en innovación educativa en la región.",
      department: "Filosofía"
    },
    {
      id: 2,
      text: "Necesario para competir con otras universidades de la región y mantener nuestra posición académica en el contexto nacional. La propuesta está bien fundamentada y responde a una necesidad real de diversificación de la oferta académica.",
      department: "Ciencias Políticas"
    },
    {
      id: 3,
      text: "Los programas propuestos tienen alta demanda en el mercado laboral actual, especialmente en gestión cultural y análisis político. Esto garantizará la empleabilidad de nuestros egresados y fortalecerá el compromiso social de la universidad.",
      department: "Gestión Cultural"
    },
    {
      id: 4,
      text: "Apoyo total, es momento de innovar en la educación superior y adaptarse a las nuevas realidades del siglo XXI. La propuesta es coherente con las tendencias internacionales en educación superior.",
      department: "Ciencias Humanas"
    },
    {
      id: 5,
      text: "La propuesta permitirá optimizar recursos y crear sinergias entre programas afines, mejorando la eficiencia institucional. La interdisciplinariedad propuesta enriquecerá la formación de nuestros estudiantes.",
      department: "Filosofía"
    },
    {
      id: 6,
      text: "Es una oportunidad única para posicionar a la FCHS como líder en innovación educativa en la región. Los recursos destinados a infraestructura y tecnología mejorarán significativamente las condiciones de enseñanza.",
      department: "Ciencias Políticas"
    },
    {
      id: 7,
      text: "La propuesta responde a las necesidades del contexto regional y nacional, fortaleciendo el compromiso social de la universidad. Considero que esta iniciativa puede generar nuevas oportunidades de investigación interdisciplinaria.",
      department: "Gestión Cultural"
    },
    {
      id: 8,
      text: "Apoyo completamente esta iniciativa que diversificará nuestra oferta académica y nos permitirá atender mejor las demandas del mercado laboral actual. La formación interdisciplinaria es el futuro de la educación superior.",
      department: "Ciencias Humanas"
    },
    {
      id: 9,
      text: "La propuesta está muy bien estructurada y cuenta con un sólido respaldo financiero que garantiza su viabilidad. Esto nos dará la estabilidad necesaria para implementar los programas con la calidad académica que merecen.",
      department: "Filosofía"
    },
    {
      id: 10,
      text: "Considero que es el momento adecuado para esta expansión académica. La universidad ha demostrado su capacidad de gestión en proyectos anteriores y ahora debemos apostar por el crecimiento académico responsable.",
      department: "Gestión Cultural"
    },
    {
      id: 11,
      text: "Esta propuesta fortalecerá significativamente la investigación en ciencias sociales y humanas, creando espacios de diálogo interdisciplinario que enriquecerán la producción académica de la facultad.",
      department: "Ciencias Políticas"
    },
    {
      id: 12,
      text: "Apoyo la iniciativa porque permitirá formar profesionales más integrales, capaces de abordar los complejos desafíos sociales contemporáneos desde múltiples perspectivas disciplinarias.",
      department: "Ciencias Humanas"
    },
    {
      id: 13,
      text: "Me parece una propuesta muy acertada que responde a las necesidades actuales del mercado laboral y académico. La interdisciplinariedad es fundamental para abordar los retos del siglo XXI.",
      department: "Filosofía"
    },
    {
      id: 14,
      text: "Estoy completamente de acuerdo con la creación del DCH. Es una oportunidad histórica para fortalecer la investigación y la docencia en nuestra facultad, consolidando nuestro liderazgo académico en la región.",
      department: "Ciencias Políticas"
    },
    {
      id: 15,
      text: "La propuesta tiene mi apoyo total. Creo que es el camino correcto para modernizar nuestra oferta académica y hacerla más competitiva a nivel nacional e internacional.",
      department: "Gestión Cultural"
    }
  ];

  const concernComments = [
    {
      id: 20,
      text: "Tengo serias dudas sobre la sostenibilidad financiera a largo plazo de esta propuesta. ¿Qué sucede si no se alcanzan las metas de matrícula proyectadas de 45 estudiantes por semestre? Necesitamos un plan de contingencia más detallado.",
      department: "Ciencias Políticas"
    },
    {
      id: 21,
      text: "Me preocupa profundamente que la implementación sea muy apresurada y no se hayan considerado todos los aspectos académicos y administrativos necesarios. Creo que necesitamos más tiempo para planificar adecuadamente.",
      department: "Filosofía"
    },
    {
      id: 22,
      text: "¿Cómo se garantizará que cada programa mantenga su identidad académica específica y su rigor disciplinario? Existe el riesgo real de que se diluyan las particularidades de cada disciplina.",
      department: "Gestión Cultural"
    },
    {
      id: 23,
      text: "Considero que el presupuesto destinado a investigación es claramente insuficiente para programas de posgrado que aspiren a ser competitivos a nivel nacional e internacional.",
      department: "Ciencias Humanas"
    },
    {
      id: 24,
      text: "Tengo serias reservas sobre la capacidad real de la infraestructura actual para atender el incremento significativo de estudiantes proyectado. ¿Realmente será suficiente para garantizar condiciones adecuadas?",
      department: "Filosofía"
    },
    {
      id: 25,
      text: "Me inquieta profundamente la falta de claridad en los criterios de selección y contratación de nuevos docentes. Esto es fundamental para garantizar la calidad académica.",
      department: "Ciencias Políticas"
    },
    {
      id: 26,
      text: "¿Cómo se va a garantizar la articulación efectiva entre los tres programas sin que se generen conflictos administrativos o académicos? Me preocupa que la gestión conjunta pueda crear más problemas que beneficios.",
      department: "Gestión Cultural"
    },
    {
      id: 27,
      text: "Tengo dudas sobre si el mercado laboral regional realmente puede absorber a todos los egresados que se proyectan. ¿Se han hecho estudios serios de empleabilidad y seguimiento a egresados?",
      department: "Ciencias Humanas"
    },
    {
      id: 28,
      text: "¿Cómo se garantizará la calidad académica con el presupuesto propuesto? Me preocupa que los recursos asignados no sean suficientes para mantener los estándares de excelencia que caracterizan a nuestra institución.",
      department: "Filosofía"
    }
  ];

  const disagreementComments = [
    {
      id: 30,
      text: "No estoy de acuerdo con esta propuesta en absoluto. Considero que es mucho más conveniente y responsable fortalecer los programas existentes antes de aventurarnos a crear nuevos.",
      department: "Filosofía"
    },
    {
      id: 31,
      text: "Creo firmemente que la propuesta es prematura y no se han evaluado suficientemente las consecuencias a largo plazo. Tampoco se ha consultado adecuadamente a todos los sectores involucrados.",
      department: "Ciencias Políticas"
    },
    {
      id: 32,
      text: "No veo la necesidad real de crear estos programas cuando ya existen ofertas similares en otras facultades de la universidad y en instituciones de la región.",
      department: "Gestión Cultural"
    },
    {
      id: 33,
      text: "Considero que los recursos económicos disponibles podrían utilizarse de manera mucho más efectiva en mejorar la infraestructura, las condiciones laborales de los docentes actuales y los recursos bibliográficos.",
      department: "Ciencias Humanas"
    },
    {
      id: 34,
      text: "No estoy convencido de que la demanda proyectada sea realista ni sostenible en el tiempo. Los estudios de mercado presentados me parecen demasiado optimistas.",
      department: "Filosofía"
    },
    {
      id: 35,
      text: "Me opongo a esta propuesta porque creo que fragmentará aún más la facultad y creará divisiones innecesarias. En lugar de fortalecer la unidad académica, podría generar competencia interna.",
      department: "Ciencias Políticas"
    },
    {
      id: 36,
      text: "No apoyo la creación del DCH porque considero que los recursos se podrían invertir mejor en investigación y en mejorar las condiciones de los programas actuales que ya tienen trayectoria.",
      department: "Gestión Cultural"
    },
    {
      id: 37,
      text: "Considero que esta propuesta no ha sido suficientemente socializada con la comunidad académica y que se está tomando una decisión apresurada sin el consenso necesario.",
      department: "Ciencias Humanas"
    }
  ];

  const constructiveComments = [
    {
      id: 40,
      text: "Sugiero establecer mecanismos claros y específicos de evaluación y seguimiento del proceso de implementación para asegurar el éxito del proyecto y poder hacer ajustes oportunos cuando sea necesario.",
      department: "Gestión Cultural"
    },
    {
      id: 41,
      text: "Recomiendo definir con mayor precisión los criterios de selección de docentes y los perfiles requeridos para cada programa, incluyendo experiencia específica, formación doctoral en las áreas pertinentes.",
      department: "Ciencias Humanas"
    },
    {
      id: 42,
      text: "Propongo fortalecer significativamente los vínculos con el sector productivo, organizaciones sociales, entidades gubernamentales y sector privado para garantizar la empleabilidad de los egresados.",
      department: "Ciencias Políticas"
    },
    {
      id: 43,
      text: "Sería conveniente asegurar que la infraestructura tecnológica sea suficiente y actualizada para soportar las nuevas modalidades educativas, metodologías innovadoras y las demandas de la educación del siglo XXI.",
      department: "Gestión Cultural"
    },
    {
      id: 44,
      text: "Sugiero crear un comité de seguimiento interdisciplinario permanente que monitoree la implementación, evalúe periódicamente los resultados obtenidos y proponga ajustes cuando sea necesario.",
      department: "Filosofía"
    },
    {
      id: 45,
      text: "Recomiendo establecer convenios específicos con instituciones nacionales e internacionales de prestigio para fortalecer la movilidad académica, la investigación colaborativa y el intercambio de experiencias.",
      department: "Ciencias Humanas"
    },
    {
      id: 46,
      text: "Propongo desarrollar un plan de comunicación efectivo para socializar adecuadamente la propuesta con toda la comunidad universitaria y externa, explicando claramente los beneficios, objetivos y metodología.",
      department: "Ciencias Políticas"
    },
    {
      id: 47,
      text: "Sugiero implementar un sistema de becas y apoyo financiero para estudiantes de escasos recursos, garantizando que los programas sean accesibles y contribuyan a la equidad social.",
      department: "Gestión Cultural"
    },
    {
      id: 48,
      text: "Recomiendo realizar un estudio de impacto ambiental y social de la implementación de los nuevos programas, considerando aspectos como el aumento del tráfico vehicular, el consumo de recursos.",
      department: "Filosofía"
    }
  ];

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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios de Apoyo ({supportiveComments.length})</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {supportiveComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios con Dudas y Preocupaciones ({concernComments.length})</h3>
        
        <div className="space-y-4">
          {concernComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comentarios en Desacuerdo ({disagreementComments.length})</h3>
        
        <div className="space-y-4">
          {disagreementComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sugerencias y Observaciones Constructivas ({constructiveComments.length})</h3>
        
        <div className="space-y-4">
          {constructiveComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
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