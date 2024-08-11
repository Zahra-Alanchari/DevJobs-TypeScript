import React from 'react';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details/Details';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
