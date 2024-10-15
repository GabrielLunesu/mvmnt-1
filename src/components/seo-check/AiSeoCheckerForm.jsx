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
  const [initialData, setInitialData] = useState(null);
  const [analysisResults, setAnalysisResults] = useState({});

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
    setInitialData(null);
    setAnalysisResults({});

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
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setInitialData(data.initialData);
      setStep(1);
    } catch (error) {
      console.error('Fout bij het ophalen van initiële data:', error);
      setError(`Kon geen website-analyse uitvoeren. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const analyzeSection = async (section, prompt) => {
    try {
      const res = await fetch(`/api/analyze-section`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ section, prompt }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setAnalysisResults(prev => ({ ...prev, [section]: data.analysis }));
    } catch (error) {
      console.error(`Fout bij het analyseren van sectie ${section}:`, error);
      setAnalysisResults(prev => ({ ...prev, [section]: { error: `Kon ${section} niet analyseren.` } }));
    }
  };

  useEffect(() => {
    if (initialData) {
      analyzeSection('loadingTime', `
        Analyseer de laadtijd van ${initialData.loadTime}ms voor de website. 
        Geef een beoordeling van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van de laadtijd",
          "improvement": "Suggestie voor verbetering",
          "rating": 5
        }
      `);

      analyzeSection('wordCount', `
        Analyseer het woordenaantal van ${initialData.wordCount} woorden op de webpagina.
        Geef een beoordeling van 1-10, waarbij 1-3 te weinig is, 4-7 voldoende, en 8-10 optimaal.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van het woordenaantal",
          "improvement": "Suggestie voor verbetering indien nodig",
          "rating": 5
        }
      `);

      analyzeSection('altText', `
        Analyseer het alt-tekstgebruik: ${initialData.altTextData.imagesWithAlt}/${initialData.altTextData.totalImages} afbeeldingen hebben alt-tekst, ${initialData.altTextData.altTextCoverage} dekking.
        Geef een beoordeling van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van alt-tekstgebruik",
          "improvement": "Suggestie voor verbetering",
          "rating": 5
        }
      `);

      analyzeSection('h1', `
        Analyseer de H1 tag: "${initialData.h1}".
        Beoordeel de relevantie en SEO-vriendelijkheid van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van de H1 tag",
          "improvement": "Suggestie voor verbetering indien nodig",
          "rating": 5
        }
      `);

      analyzeSection('metaDescription', `
        Analyseer de meta beschrijving: "${initialData.metaDescription}".
        Beoordeel de kwaliteit en SEO-vriendelijkheid van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van de meta beschrijving",
          "improvement": "Suggestie voor verbetering indien nodig",
          "rating": 5
        }
      `);

      analyzeSection('keywordUsage', `
        Analyseer het zoekwoordgebruik: ${JSON.stringify(initialData.keywordData.keywordOccurrences)} 
        met dichtheid ${JSON.stringify(initialData.keywordData.keywordDensity)}.
        Beoordeel de keyword optimalisatie van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van zoekwoordgebruik",
          "improvement": "Suggestie voor verbetering",
          "rating": 5
        }
      `);

      analyzeSection('contentQuality', `
        Analyseer de inhoudskwaliteit en leesbaarheid van de eerste 1000 tekens: "${initialData.contentPreview}".
        Beoordeel de kwaliteit van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van inhoudskwaliteit",
          "improvement": "Suggestie voor verbetering",
          "rating": 5
        }
      `);

      analyzeSection('businessAndAudience', `
        Analyseer hoe goed de inhoud aansluit bij het bedrijf (${initialData.business}) en de doelgroep (${initialData.audience}).
        Beoordeel de afstemming van 1-10, waarbij 1-3 slecht is, 4-7 gemiddeld, en 8-10 goed.
        Retourneer een JSON object met de volgende structuur:
        {
          "analysis": "Korte analyse van afstemming op bedrijf en doelgroep",
          "improvement": "Suggestie voor verbetering",
          "rating": 5
        }
      `);
    }
  }, [initialData]);

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

  const SEOCheckWidget = ({ title, icon, content, analysis, improvement, rating, extraData, isLoading }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 rounded-lg bg-white shadow-md mb-4"
    >
      <h4 className="text-lg font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
        {isLoading ? (
          <FaSpinner className="animate-spin ml-auto" />
        ) : (
          <>
            <span className={`ml-auto ${getRatingColor(rating)}`}>{rating}/10</span>
            {getRatingIcon(rating)}
          </>
        )}
      </h4>
      {!isLoading && (
        <>
          {content && (
            <div className="mb-2">
              <p className="font-medium">Huidige inhoud:</p>
              <p className="italic">{typeof content === 'object' ? JSON.stringify(content) : content}</p>
            </div>
          )}
          {extraData && (
            <div className="mb-2">
              {Object.entries(extraData).map(([key, value]) => (
                <p key={key}>
                  <span className="font-medium">{key}:</span> {typeof value === 'object' ? JSON.stringify(value) : value}
                </p>
              ))}
            </div>
          )}
          <div className="mb-2">
            <p className="font-medium">Analyse:</p>
            <p>{typeof analysis === 'object' ? JSON.stringify(analysis) : analysis}</p>
          </div>
          {improvement && (
            <div>
              <p className="font-medium">Aanbevelingen:</p>
              <p>{typeof improvement === 'object' ? JSON.stringify(improvement) : improvement}</p>
            </div>
          )}
        </>
      )}
    </motion.div>
  );

  const renderAnalysisSection = (title, icon, dataKey) => {
    const data = analysisResults[dataKey] || {};
    const isLoading = !data.analysis;

    let extraData = initialData ? { [title]: initialData[dataKey] } : null;
    if (extraData && typeof extraData[title] === 'object') {
      extraData = Object.entries(extraData[title]).reduce((acc, [key, value]) => {
        acc[key] = typeof value === 'object' ? JSON.stringify(value) : value;
        return acc;
      }, {});
    }

    return (
      <SEOCheckWidget
        title={title}
        icon={icon}
        extraData={extraData}
        content={data.content}
        analysis={data.analysis}
        improvement={data.improvement}
        rating={data.rating}
        isLoading={isLoading}
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
    <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl my-8 px-4 sm:px-6 md:px-8">
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

        {step === 1 && initialData && (
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