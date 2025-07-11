import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Info } from 'lucide-react';

const ParticipationCharts: React.FC = () => {
  const departmentData = [
    { name: 'Ciencias Humanas', responses: 45, percentage: 35.4 },
    { name: 'Filosofía', responses: 32, percentage: 25.2 },
    { name: 'Ciencias Políticas', responses: 28, percentage: 22.0 },
    { name: 'Gestión Cultural', responses: 22, percentage: 17.3 }
  ];

  const supportData = [
    { name: 'A favor', value: 100, color: '#10B981' },
    { name: 'En contra', value: 15, color: '#EF4444' },
    { name: 'Neutral/Sin respuesta', value: 12, color: '#6B7280' }
  ];

  const COLORS = ['#10B981', '#EF4444', '#6B7280'];

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

  return (
    <motion.section 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Análisis de Participación</h2>
        <p className="text-gray-600">Distribución de respuestas por departamento y posición frente a la propuesta</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de participación por departamento */}
        <motion.div 
          className="chart-container"
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
              <BarChart data={departmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
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

        {/* Gráfico de apoyo a la propuesta */}
        <motion.div 
          className="chart-container"
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
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  {supportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} respuestas`, 'Cantidad']}
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

      {/* Criterios de éxito */}
      <motion.div 
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Criterios para Proceso Exitoso
        </h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Participación mínima:</strong> 100+ respuestas (Logrado: 127)</p>
          <p><strong>Apoyo mínimo:</strong> 70% a favor (Logrado: 78.7%)</p>
          <p><strong>Representatividad:</strong> Participación de todos los departamentos (Logrado)</p>
          <p className="text-xs text-blue-700 mt-2">
            <em>Criterios basados en estándares de consultas institucionales universitarias y mejores prácticas de participación académica.</em>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ParticipationCharts;