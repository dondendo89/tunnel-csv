// api/get-carburanti.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const csvUrl = "https://www.mimit.gov.it/images/stories/carburanti/MediaRegionaleStradale.csv";

  try {
    const response = await fetch(csvUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const csvData = await response.text();
    
    // Invia il contenuto del CSV come risposta
    res.status(200).send(csvData);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};