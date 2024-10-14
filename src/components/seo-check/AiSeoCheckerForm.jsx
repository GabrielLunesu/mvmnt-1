'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FaSpinner,
  FaGlobe,
  FaUsers,
  FaBuilding,
  FaSearch,
  FaClock,
  FaFileAlt,
  FaImage,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaArrowRight,
} from 'react-icons/fa';

export default function AiSeoCheckerForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [business, setBusiness] = useState('');
  const [audience, setAudience] = useState('');
  const [keywords, setKeywords] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (analysis) {
      setStep(1);
    }
  }, [analysis]);

  const preprocessUrl = (inputUrl) => {
    // Remove leading/trailing whitespace
    let processedUrl = inputUrl.trim();
    
    // Check if the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(processedUrl)) {
      // If not, prepend https://
      processedUrl = 'https://' + processedUrl;
    }
    
    // Remove trailing slash if present
    processedUrl = processedUrl.replace(/\/$/, '');
    
    return processedUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAnalysis(null);

    const processedUrl = preprocessUrl(url);

    try {
      const res = await fetch(`/api/ai-content-analysis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: processedUrl, business, audience, keywords }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorData.error || 'Unknown error'}`);
      }
      const data = await res.json();
      setAnalysis(data.analysis);
    } catch (error) {
      console.error('Fout bij het ophalen van AI-analyse:', error);
      setError(`Kon geen AI-analyse uitvoeren. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return 'text-green-500';
    if (rating >= 4) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getRatingIcon = (rating) => {
    if (rating >= 8) return <FaCheckCircle className="text-green-500" />;
    if (rating >= 4) return <FaExclamationTriangle className="text-yellow-500" />;
    return <FaTimesCircle className="text-red-500" />;
  };

  const SEOCheckWidget = ({ title, icon, content, analysis, improvement, rating, extraData }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 rounded-lg bg-white shadow-md mb-4"
    >
      <h4 className="text-lg font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
        <span className={`ml-auto ${getRatingColor(rating)}`}>{rating}/10</span>
        {getRatingIcon(rating)}
      </h4>
      {content && (
        <div className="mb-2">
          <p className="font-medium">Huidige inhoud:</p>
          <p className="italic">{content}</p>
        </div>
      )}
      {extraData && (
        <div className="mb-2">
          {Object.entries(extraData).map(([key, value]) => (
            <p key={key}>
              <span className="font-medium">{key}:</span> {value}
            </p>
          ))}
        </div>
      )}
      <div className="mb-2">
        <p className="font-medium">Analyse:</p>
        <p>{analysis}</p>
      </div>
      {improvement && (
        <div>
          <p className="font-medium">Aanbevelingen:</p>
          <p>{improvement}</p>
        </div>
      )}
    </motion.div>
  );

  const renderAnalysisSection = (title, icon, dataKey) => {
    if (!analysis || !analysis[dataKey]) return null;

    const data = analysis[dataKey];
    const value = data.value || 'N/A';
    const analysisText = data.analysis || '';
    const improvement = data.improvement || '';
    const content = data.content;
    const rating = data.rating || 5;

    return (
      <SEOCheckWidget
        title={title}
        icon={icon}
        extraData={{ [title]: value }}
        content={content}
        analysis={analysisText}
        improvement={improvement}
        rating={rating}
      />
    );
  };

  const formFields = [
    { label: 'Uw Naam', value: name, setter: setName, placeholder: 'Voer uw naam in' },
    { label: 'Website URL', value: url, setter: setUrl, placeholder: 'voorbeeld.nl', type: 'text' },
    { label: 'Bedrijfsomschrijving', value: business, setter: setBusiness, placeholder: 'Beschrijf uw bedrijf kort' },
    { label: 'Doelgroep', value: audience, setter: setAudience, placeholder: 'Beschrijf uw doelgroep' },
    { label: 'Belangrijkste Zoekwoorden', value: keywords, setter: setKeywords, placeholder: 'Voer belangrijke zoekwoorden in, gescheiden door komma\'s' },
  ];

  return (
    <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl -my-32 px-4 sm:px-6 md:px-8">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <div className="p-6 md:p-12 bg-gradient-to-br from-red-600 via-purple-600 to-indigo-600 rounded-t-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Krijg Uw Gepersonaliseerde SEO-Analyse</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.label} className="block text-sm font-medium text-white">
                    {field.label}
                  </label>
                  <input
                    type={field.type || 'text'}
                    id={field.label}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    placeholder={field.placeholder}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full text-purple-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white flex items-center justify-center bg-white hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Analyseren...
                  </>
                ) : (
                  <>
                    <FaSearch className="mr-2" />
                    Ontdek Uw SEO Potentieel
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {step === 1 && analysis && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="p-6 md:p-12 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-t-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Hallo {name}, hier is uw SEO-analyse:
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-6 bg-white rounded-lg shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2">Algemene SEO Score</h4>
              <div className="flex items-center">
                <div className="text-4xl font-bold mr-2">{analysis.overallScore}/10</div>
                {getRatingIcon(analysis.overallScore)}
              </div>
            </motion.div>

            {renderAnalysisSection(
              "Laadtijd van de Pagina",
              <FaClock className="text-indigo-500" />,
              "loadingTime"
            )}

            {renderAnalysisSection(
              "Woordenaantal",
              <FaFileAlt className="text-indigo-500" />,
              "wordCount"
            )}

            {renderAnalysisSection(
              "Alt-tekst Gebruikanalyse",
              <FaImage className="text-indigo-500" />,
              "altText"
            )}

            {renderAnalysisSection(
              "H1 Tag Analyse",
              <FaGlobe className="text-indigo-500" />,
              "h1"
            )}

            {renderAnalysisSection(
              "Meta Beschrijving",
              <FaSearch className="text-indigo-500" />,
              "metaDescription"
            )}

            {renderAnalysisSection(
              "Zoekwoordgebruik",
              <FaSearch className="text-indigo-500" />,
              "keywordUsage"
            )}

            {renderAnalysisSection(
              "Inhoudskwaliteit en Leesbaarheid",
              <FaUsers className="text-indigo-500" />,
              "contentQuality"
            )}

            {renderAnalysisSection(
              "Afstemming op Bedrijf en Doelgroep",
              <FaBuilding className="text-indigo-500" />,
              "businessAndAudience"
            )}

            {analysis.additionalRecommendations && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow mt-8"
              >
                <h4 className="text-lg font-bold mb-4">Aanvullende Aanbevelingen:</h4>
                {Array.isArray(analysis.additionalRecommendations) ? (
                  <ul className="list-disc pl-5">
                    {analysis.additionalRecommendations.map((recommendation, index) => (
                      <li key={index} className="mb-2">
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-2">{analysis.additionalRecommendations}</p>
                )}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold mb-6 text-white">
                {name}, wilt u deze aanbevelingen laten implementeren voor betere resultaten?
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block text-purple-700 px-8 py-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className="flex items-center"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2 font-bold">Neem Contact Op met Onze SEO-Experts</span>
                    <FaArrowRight />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
