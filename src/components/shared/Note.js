import React from 'react'

// Styles
import styles from '../../styles/Note.module.css'

export default function Note({text , setNote , saveHandler , deleteHandler}) {
    const changeHandler = (e) => {
        setNote({
            ...text,
            text : e.target.value,
        })
    }
  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <div className={styles.titleChilde}>
                <h3>{text.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </div>
        </div>
        <div className={styles.inputDiv} >
            <textarea onChange={changeHandler} value={text.text} type="text" placeholder='type here ...'/>
        </div>
        <div className={styles.bottomSection}>
            <button className={styles.delete} onClick={() => deleteHandler()}>Delete</button>
            <button className={styles.save} onClick={() => saveHandler()}>Save</button>
        </div>
    </div>
  )
}
