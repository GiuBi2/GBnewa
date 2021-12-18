import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import NewsDetails from './components/NewsDetails'
import Logo from './components/Logo'
import MenuHorizontal from './components/MenuHorizontal'
import MenuVertical from './components/MenuVertical'
import Footer from './components/Footer'
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='grid-container'>
				<Logo />
				<MenuHorizontal />
				<Routes>
					<Route path='/' element={<News />} />
						<Route path=':idNoticia' element={<NewsDetails />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>

	);
}

export default App;