import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import HomePage from 'pages/HomePage';
import MyLibraryPage from 'pages/MyLibraryPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="mylibrary" element={<MyLibraryPage />} />
      </Route>
    </Routes>
  );
}
