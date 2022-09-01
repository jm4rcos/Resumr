import React, { useState, createContext, useEffect } from "react";

const TemplateContext = createContext({
  selectedTemplate: String,
  setSelectedTemplate: () => {},
});

export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  return (
    <TemplateContext.Provider
      value={{
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContext;
