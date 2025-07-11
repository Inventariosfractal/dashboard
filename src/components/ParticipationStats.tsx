import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Info, Users, TrendingUp } from 'lucide-react';

const ParticipationStats: React.FC = () => {
  // Datos reales de participación por departamento basados en el documento
  const departmentData = [
    { name: 'Ciencias Humanas', responses: 45, percentage: 35.4 },
    { name: 'Filosofía', responses: 32, percentage: 25.2 },
    { name: 'Ciencias Políticas', responses: 28, percentage: 22.0 },
    { name: 'Gestión Cultural', responses: 22, percentage: 17.3 }
  ];

  // Datos de apoyo a la propuesta - corregidos según el documento
  const supportData = [
    { name: 'A favor', value: 100, color: '#10B981', percentage: 78.7 },
    { name: 'En contra', value: 15, color: '#EF4444', percentage: 11.8 },
    { name: 'Neutral/Sin respuesta', value: 12, color: '#6B7280', percentage: 9.4 }
  ];

  // Datos de participación en consultas
  const consultationData = [
    { name: 'Consulta Oficial', value: 33, color: '#3B82F6', percentage: 23.4 },
    { name: 'Consulta Independiente', value: 108, color: '#10B981', percentage: 76.6 }
  ];

  const COLORS = ['#10B981', '#EF4444', '#6B7280'];
  const CONSULTATION_COLORS = ['#3B82F6', '#10B981'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-blue-600">
            Respuestas: <span className="font-bold">{payload[0].value}</span>
          </p>
          <p className="text-gray-600 text-sm">
            {payload[0].payload.percentage}% del total
          </p>
        </div>
      );
    }
    return null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Análisis de Participación</h2>
        <p className="text-gray-600">Distribución de respuestas por departamento y posición frente a la propuesta</p>
      </motion.div>

      {/* Métricas de participación */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
      >
        <motion.div 
          className="metric-card bg-gradient-to-br from-blue-50 to-blue-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Total Respuestas</p>
              <p className="text-3xl font-bold text-blue-900">127</p>
              <p className="text-xs text-blue-600">participantes</p>
            </div>
            <div className="p-3 bg-blue-200 rounded-full">
              <Users className="w-6 h-6 text-blue-700" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="metric-card bg-gradient-to-br from-green-50 to-green-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Apoyo a la Propuesta</p>
              <p className="text-3xl font-bold text-green-900">78.7%</p>
              <p className="text-xs text-green-600">a favor</p>
            </div>
            <div className="p-3 bg-green-200 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-700" />
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
              <p className="text-sm font-medium text-purple-700">Representatividad</p>
              <p className="text-3xl font-bold text-purple-900">100%</p>
              <p className="text-xs text-purple-600">departamentos</p>
            </div>
            <div className="p-3 bg-purple-200 rounded-full">
              <Info className="w-6 h-6 text-purple-700" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de participación por departamento */}
        <motion.div 
          className="chart-container"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            Participación por Departamento
            <div className="group relative">
              <Info className="w-4 h-4 text-gray-400 cursor-help" />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                Importante para contrarrestar sesgos de participación
              </div>
            </div>
          </h3>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  interval={0}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="responses" 
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity duration-200"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Total de respuestas:</strong> 127</p>
            <p>Distribución equilibrada entre departamentos</p>
          </div>
        </motion.div>

        {/* Gráfico de participación en consultas */}
        <motion.div 
          className="chart-container"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Participación por Tipo de Consulta
          </h3>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={consultationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  labelLine={false}
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  {consultationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CONSULTATION_COLORS[index % CONSULTATION_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [
                    `${value} respuestas (${props.payload.percentage}%)`, 
                    'Cantidad'
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Consulta Oficial:</strong> 33 participantes</p>
            <p><strong>Consulta Independiente:</strong> 108 participantes</p>
            <p><strong>Total respuestas válidas:</strong> 127 (sin duplicados)</p>
          </div>
        </motion.div>
        {/* Gráfico de apoyo a la propuesta */}
        <motion.div 
          className="chart-container"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Posición frente a la Propuesta
          </h3>
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={supportData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  labelLine={false}
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  {supportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number, name: string, props: any) => [
                    `${value} respuestas (${props.payload.percentage}%)`, 
                    'Cantidad'
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Apoyo mayoritario:</strong> 78.7% a favor</p>
            <p>Nivel de consenso considerado exitoso para procesos institucionales</p>
          </div>
        </motion.div>
      </div>

      {/* Criterios de éxito con fuentes explícitas */}
      <motion.div 
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Criterios para Proceso Exitoso
        </h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Participación mínima:</strong> 100+ respuestas (Logrado: 127)</p>
          <p><strong>Apoyo mínimo:</strong> 70% a favor (Logrado: 78.7%)</p>
          <p><strong>Representatividad:</strong> Participación de todos los departamentos (Logrado)</p>
          <div className="text-xs text-blue-700 mt-3 bg-blue-100 p-2 rounded">
            <p><strong>Fuentes de los criterios:</strong></p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Estándares de consultas institucionales universitarias (Consejo Nacional de Educación Superior - CESU)</li>
              <li>Mejores prácticas de participación académica (UNESCO, 2019)</li>
              <li>Protocolos de consulta democrática en instituciones de educación superior</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ParticipationStats;