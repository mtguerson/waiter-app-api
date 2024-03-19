import { Router } from 'express';

export const router = Router();

// List Categories
router.get('/categories', (req, res) => {
  res.send('OK');
});

// Create Category
router.post('/categories', (req, res) => {
  res.send('OK');
});

// List Products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create Product
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get Product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List Orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create Order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/Cancel Order
router.delete('/categories/:orderId', (req, res) => {
  res.send('OK');
});
