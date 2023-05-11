import Banner from 'components/Banner'
import React from 'react'
import Titulo from 'components/Titulo'
import styles from './Player.module.css'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json'
import PaginaNaoEncontrada from 'pages/NaoEncontrada'

export default function Player() {
    const parametros = useParams();
    const video = videos.find((video)=>{
        return video.id === Number(parametros.id)
    })

    if(!video){
        return <PaginaNaoEncontrada />
    }
    return (
        <div>
            <Banner imagem='home' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe 
            width="100%"
             height="100%" 
             src={video.link} 
             title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </div>
        
    )
}
