// File: api/growdata.js

export default async function handler(req, res) {
  try {
    const response = await fetch('https://ytdlypton.nvlgroup.my.id/growagarden/stock');
    const data = await response.json();

    // Validasi minimal
    if (!data || !data.result) {
      return res.status(500).json({ error: 'Data kosong atau salah format', raw: data });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal ambil data', detail: err.message });
  }
}
