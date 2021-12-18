import React from 'react'
import { Link } from 'react-router-dom';


import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='menu-horizontal-container'>
			<Link to='/' className="item">
			<h2>GB News</h2>
			</Link>
		</div>
	)
}

export default MenuHorizontal