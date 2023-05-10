import React , { useState } from 'react'

// Icon
import zabdar from '../../assets/Icons/zabdar.svg'

// Styles
import styles from '../../styles/AddForm.module.css'

export default function AddForm({ showAddFormHandler , addObject }) {
    const [err , setErr] = useState("")
    const [text , setText] = useState("")
    const clickHandeler = (e) => {
        e.preventDefault();
        if (text) {
            addObject(text)
            setText("")
        } else {
            setErr("Pleacs Type A character...")
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.module}>
            <div className={styles.remove} >
                <img src={zabdar} onClick={() => showAddFormHandler() } alt="zarbdar" />
            </div>
            <form>
                <h2>What is the subject of the note?</h2>
                <div className={styles.inputDiv}>
                    <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='type...' autoFocus/>
                    {err && <span>{err}</span>}
                </div>
                <button onClick={clickHandeler}>Add</button>
            </form>
        </div>
    </div>
  )
}
