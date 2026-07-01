import express from 'express';
import { createServer as createViteServer } from 'vite';
import productsHandler from './api/products.js';
import categoriesHandler from './api/categories.js';
import ordersHandler from './api/orders.js';
import newsletterHandler from './api/newsletter.js';
import reviewsHandler from './api/reviews.js';

const app = express();
app.use(express.json({ limit: '10mb' }));

const apiWrap = (handler) => (req, res) => handler(req, res);

app.use('/api/products', apiWrap(productsHandler));
app.use('/api/categories', apiWrap(categoriesHandler));
app.use('/api/orders', apiWrap(ordersHandler));
app.use('/api/newsletter', apiWrap(newsletterHandler));
app.use('/api/reviews', apiWrap(reviewsHandler));

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa',
});

app.use(vite.middlewares);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Valency dev server running at http://localhost:${PORT}`);
});
