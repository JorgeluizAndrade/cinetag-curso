import styles from './NaoEncontrada.module.css'

import React from 'react'

export default function PaginaNaoEncontrada() {
  return (
    <section className={styles.container}>
        <h2>Ops, página não encontrada!</h2>
        <p>O conteúdo que você procura não existe!</p>

    </section>
  )
}
