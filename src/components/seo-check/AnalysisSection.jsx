export default function AnalysisSection({ title, icon, extraData, content, analysis, improvement }) {
  return (
    <div className="...">
      <h3 className="...">{title}</h3>
      {icon && <div className="...">{icon}</div>}
      {extraData && (
        <div className="...">
          {Object.entries(extraData).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      )}
      {content && <p className="..."><strong>Content:</strong> {content}</p>}
      {analysis && <p className="..."><strong>Analysis:</strong> {analysis}</p>}
      {improvement && <p className="..."><strong>Improvement:</strong> {improvement}</p>}
    </div>
  );
}
