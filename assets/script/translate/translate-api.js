/**
### Aquí uso la API de Google através de RapidAPI (Es gratuita!)
*/
const axios = require('axios');
const fs = require('fs');

async function translateHTMLContent(htmlContent, sourceLang, targetLang) {
  const encodedParams = new URLSearchParams();
  encodedParams.set('q', htmlContent);
  encodedParams.set('target', targetLang);
  encodedParams.set('source', sourceLang);

  const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'eb34bfb8bbmsh84df81696181192p193827jsn34e5cac36f2f', // Esta API KEY te dan con tu login en la web: https://rapidapi.com/googlecloud/api/google-translate1/
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    const translatedText = response.data.data.translations[0].translatedText;
    return translatedText;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// He modificado el código para traducir mi index.html en español a inglés
async function translateAndReplaceHTMLContent(filePath, sourceLang, targetLang) {
  try {
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    const translatedText = await translateHTMLContent(htmlContent, sourceLang, targetLang);

    if (translatedText) {
      const translatedHTML = htmlContent.replace(/<body>(.*?)<\/body>/s, `<body>${translatedText}</body>`);
      fs.writeFileSync(filePath, translatedHTML, 'utf8');
      console.log('Translation and replacement successful.');
    } else {
      console.log('Translation failed.');
    }
  } catch (error) {
    console.error(error);
  }
}

const htmlFilePath = 'https://solidsnk86.github.io/mioPortfolioCG/index.html';
const sourceLanguage = 'en';
const targetLanguage = 'es';

translateAndReplaceHTMLContent(htmlFilePath, sourceLanguage, targetLanguage);
