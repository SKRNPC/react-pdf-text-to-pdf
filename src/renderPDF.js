import { pdf } from "@react-pdf/renderer";
import React from "react";
import { PDF } from "./PDF";

export const renderPDF = async (props) => {
  const blob = await pdf(<PDF {...props} />).toBlob();
  return blob;
};
