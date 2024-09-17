import { useState, useEffect } from "react";
import { renderPDF } from "./renderPDF";

export const useRenderPDF = ({ text }) => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generatePDF = async () => {
      try {
        setLoading(true);
        const blob = await renderPDF({ text });
        setUrl(URL.createObjectURL(blob));
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    generatePDF();

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [text]);

  return { url, loading, error };
};
