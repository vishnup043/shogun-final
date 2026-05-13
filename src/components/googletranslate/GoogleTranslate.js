import { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    const addScript = document.createElement("script");

    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    addScript.async = true;

    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "ja",
          autoDisplay: false,
        },
      );

      // Auto translate English -> Japanese
      window.location.hash = "#googtrans(en|ja)";
    };
  }, []);

  return <div id="google_translate_element"></div>;
}

export default GoogleTranslate;