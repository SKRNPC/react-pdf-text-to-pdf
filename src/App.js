import React, { useState } from "react";
import { RenderedPDFViewer } from "./RenderedPDFViewer";
import { saveAs } from "file-saver";

const App = () => {
  const [text, setText] = useState("");

  const handleDownload = async () => {
    const { renderPDF } = await import("./renderPDF");
    const blob = await renderPDF({ text });
    saveAs(blob, "test.pdf");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleDownload}>Download</button>
      <RenderedPDFViewer
        style={{ backgroundColor: "grey", width: "500px", height: "760px" }}
        text={text}
      />
    </div>
  );
};

export default App;
