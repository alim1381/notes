import React from 'react'

import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
        <h2>Notes App</h2>
        <span>Auther : Ali Moayedi</span>
    </header>
  )
}
