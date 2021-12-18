import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

// import { formatDate } from '../services/utils'
import api from '../services/api'
import './NewsDetails.css'

function NewsDetails() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(async () => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(async response => {
				await setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})

	}, [])

	return (
		<article>
			<div className="container">
      </div>
				<div className="titulo">
					<h2>{noticia.titulo}</h2>
				</div>
<div className="subtitulo">
					<h3>{noticia.subtitulo}</h3>
				</div>
				<div>
					<span className="autor">{noticia.autor}</span>
          	</div>
            
<div>
					<span className="datapublicacao"> {noticia.dataPublicacao}</span>
          </div>

      <div className="texto">
				{noticia.conteudo}
			</div>
		</article>
	)
}

export default NewsDetails