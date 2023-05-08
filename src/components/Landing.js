import React from 'react'

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
                <p>Salam</p>
                <p>Salam</p>
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.inputDiv} >
                <textarea type="text" placeholder='type here ...'/>
            </div>
            <div className={styles.bottomSection}>
                <button>Save</button>
            </div>
        </div>
    </div>
  )
}
