import React, { useEffect } from "react";

const CalendlyEmbed = ({ url, className }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ height: "100%", width: "100%", borderRadius: "10px" }}
    ></div>
  );
};

export default CalendlyEmbed;
 