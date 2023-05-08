import React , { useState } from 'react'

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
                <svg onClick={() => showAddFormHandler() } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <form>
                <h2>What is the subject of the note?</h2>
                <div className={styles.inputDiv}>
                    <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='type...'/>
                    {err && <span>{err}</span>}
                </div>
                <button onClick={clickHandeler}>Add</button>
            </form>
        </div>
    </div>
  )
}
