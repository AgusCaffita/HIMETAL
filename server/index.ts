import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});