import React from 'react'

// Styles
import styles from '../../styles/Note.module.css'

// Icons 
import pencil from '../../assets/Icons/pen.svg'
import backArrow from '../../assets/Icons/back.svg'

export default function Note({showObject , setShowObject ,text , setNote , saveHandler , deleteHandler}) {
    const changeHandler = (e) => {
        setNote({
            ...text,
            text : e.target.value,
        })
    }
  return (
    <div className={!showObject ? styles.main : styles.mainHidden }>
        <div className={styles.title}>
            <img className={styles.backArrowButton} onClick={() => {setShowObject(!showObject)}} src={backArrow} alt="back" />
            <div className={styles.titleChilde}>
                <h3>{text.title}</h3>
                <img src={pencil} alt="pencil" />
            </div>
        </div>
        <div className={!showObject ? styles.inputDiv : styles.inputDivHidde} >
            <textarea onChange={changeHandler} value={text.text} type="text" placeholder='type here ...'/>
        </div>
        <div className={styles.bottomSection}>
            <button className={styles.delete} onClick={() => deleteHandler()}>Delete</button>
            <button className={styles.save} onClick={() => saveHandler()}>Save</button>
        </div>
    </div>
  )
}
