// api/get-carburanti.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const csvUrl = "https://www.mimit.gov.it/images/stories/carburanti/MediaRegionaleStradale.csv";

  try {
    const response = await fetch(csvUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const csvData = await response.text();
    
    res.status(200).send(csvData);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}