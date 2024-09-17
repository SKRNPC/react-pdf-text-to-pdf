import React, { useDeferredValue } from "react";
import { useRenderPDF } from "./useRenderPDF";

export const RenderedPDFViewer = ({
  style,
  className,
  text,
  showToolbar = true,
}) => {
  const deferredText = useDeferredValue(text);
  const { url, loading, error } = useRenderPDF({ text: deferredText });

  if (loading) return <div style={style}>Loading...</div>;
  if (error) return <div style={style}>{JSON.stringify(error)}</div>;

  return <iframe src={`${url}#toolbar=${showToolbar ? 1 : 0}`} style={style} />;
};
