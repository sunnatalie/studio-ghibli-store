import React from 'react';
import logo from './logo.svg';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
    return (
        <ShoppingCartProvider>
            <Layout />
        </ShoppingCartProvider>

    );
}

export default App;
