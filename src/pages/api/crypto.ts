import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiUrl = process.env.COINGECKO_API_URL || process.env.NEXT_PUBLIC_COINGECKO_API_URL;

  if (!apiUrl) {
    return res.status(500).json({ error: 'API URL is not defined' });
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    res.status(500).json({ error: 'Failed to fetch crypto data' });
  }
}
