// api/get-carburanti.js
import fetch from 'node-fetch';

export default async function handler(request, response) {
  const csvUrl = "https://www.mimit.gov.it/images/stories/carburanti/MediaRegionaleStradale.csv";

  try {
    const res = await fetch(csvUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch CSV: ${res.statusText}`);
    }

    const csvData = await res.text();
    
    // Invia il contenuto del CSV come risposta
    response.status(200).send(csvData);

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}