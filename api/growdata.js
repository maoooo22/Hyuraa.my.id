export default async function handler(req, res) {
  try {
    const response = await fetch('https://ytdlypton.nvlgroup.my.id/growagarden/stock');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal ambil data', detail: err.message });
  }
}
