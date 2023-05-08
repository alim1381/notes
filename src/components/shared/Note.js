import React from 'react'

// Styles
import styles from '../../styles/Note.module.css'

export default function Note() {
  return (
    <div className={styles.main}>
        <div className={styles.inputDiv} >
            <textarea type="text" placeholder='type here ...'/>
        </div>
        <div className={styles.bottomSection}>
            <button className={styles.delete}>Delete</button>
            <button className={styles.save}>Save</button>
        </div>
    </div>
  )
}
