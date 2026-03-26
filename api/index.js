export default async function handler(req, res) {
  const url = `https://script.google.com/macros/s/AKfycbywG3WFQYtsrixlYXOe-O_sMSllbe4kGMMu8BUTNtJmVczfXE7fps_5GT26iMVtH16A/exec${req.url}`;
  const response = await fetch(url);
  const data = await response.text();
  res.setHeader('Content-Type', response.headers.get('content-type'));
  res.status(response.status).send(data);
}
