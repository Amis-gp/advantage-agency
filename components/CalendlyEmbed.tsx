"use client"

import React, { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  const [height, setHeight] = useState("700px");

  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }

    const updateHeight = () => {
      setHeight(window.innerWidth < 768 ? "1200px" : "700px");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div 
      id="calendly"
      className="calendly-inline-widget px-4 pt-10 md:pt-0"
      data-url={url}
      style={{ 
        minHeight: "650px",
        height: height,
        margin: "0 auto",
        overflow: "hidden"
      }}
    ></div>
  );
};

export default CalendlyEmbed;