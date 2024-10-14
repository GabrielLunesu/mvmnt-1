export default function SEOCheckWidget({ title, icon, content, analysis, improvement, extraData }) {
  return (
    <div className="p-6 rounded-lg bg-white shadow-md mb-4">
      <h4 className="text-lg font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
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
      {analysis && (
        <div className="mb-2">
          <p className="font-medium">Analyse:</p>
          <p>{analysis}</p>
        </div>
      )}
      {improvement && (
        <div>
          <p className="font-medium">Aanbevelingen:</p>
          <p>{improvement}</p>
        </div>
      )}
    </div>
  );
}
