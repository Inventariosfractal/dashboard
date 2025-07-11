import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ExecutiveSummary from './components/ExecutiveSummary';
import ParticipationStats from './components/ParticipationStats';
import FinancialAnalysis from './components/FinancialAnalysis';
import UnresolvedInquiries from './components/UnresolvedInquiries';
import EmailValidation from './components/EmailValidation';
import Comments from './components/Comments';

function App() {
  const [activeSection, setActiveSection] = useState('resumen');

  const sections = [
    { id: 'resumen', label: 'Resumen Ejecutivo', component: ExecutiveSummary },
    { id: 'participacion', label: 'Participación', component: ParticipationStats },
    { id: 'financiero', label: 'Análisis Financiero', component: FinancialAnalysis },
    { id: 'inquietudes', label: 'Inquietudes', component: UnresolvedInquiries },
    { id: 'emails', label: 'Validación Emails', component: EmailValidation },
    { id: 'comentarios', label: 'Comentarios', component: Comments },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || ExecutiveSummary;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Navigation */}
        <nav className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-1 sm:gap-2 bg-white rounded-xl p-2 shadow-sm border border-gray-100 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="animate-fade-in"
        >
          <ActiveComponent />
        </motion.div>
      </div>
    </div>
  );
}

export default App;