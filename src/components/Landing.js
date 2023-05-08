import React , { useState } from 'react'

// Components
import Note from './shared/Note'

// Styles
import styles from '../styles/Landing.module.css'

export default function Landing() {
    const [data , setData] = useState([
        {
            title : "Hi",
            text : "Hi my Name is Ali",
            id: 1,
        },
        {
            title : "HELLO",
            text : "Hello my Name is M",
            id: 2,
        },
        {
            title : "Yo",
            text : "Yoooo my Name is Ali",
            id: 3,
        },
    ])

    const [note , setNote] = useState("")
    const clickHandler = (e) => {
        const veryfiy = data.includes(note)
        console.log(veryfiy);
        if (note && veryfiy) {
            saveHandler()
        }
        setNote(e)
    }

    const saveHandler = () => {
        const newData = data.filter(e => e.id !== note.id);
        newData.unshift(note)
        setData(newData)
    }
    const deleteHandler = () => {
        const newData = data.filter(e => e.id !== note.id);
        setData(newData)
    }
  return (
    <div className={styles.container}>
        <div className={styles.objects}>
            <div className={styles.add}>
                <button>+</button>
            </div>
            <div className={styles.objectsItem}>
                {
                    data.map(t => <p className={t.id === note.id ? styles.objSelected : ""} onClick={() => clickHandler(t)} key={t.id}>{t.title}</p>)
                }
                
            </div>
        </div>
        {
            note && <Note text={note} setNote={setNote} saveHandler={saveHandler} deleteHandler={deleteHandler}/>
        }
    </div>
  )
}
