import React from 'react'

// Components
import Note from './shared/Note'

// Styles
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
        <div className={styles.objects}>
            <div className={styles.add}>
                <button>+</button>
            </div>
            <div className={styles.objectsItem}>
                <p>Salam</p>
                
            </div>
        </div>
        {
            <Note />
        }
    </div>
  )
}
