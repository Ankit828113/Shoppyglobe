import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-black text-3xl">
    Loading...
  </div>
      }>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
