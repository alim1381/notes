import React , { useState } from 'react'

// Components
import Note from './shared/Note'

// Styles
import styles from '../styles/Landing.module.css'
import AddForm from './shared/AddForm'
const idArry = [];

export default function Landing() {
    const [data , setData] = useState([
        // {
            //     title : "Hi",
        //     text : "Hi my Name is Ali",
        //     id: 1,
        // },
        // {
        //     title : "HELLO",
        //     text : "Hello my Name is M",
        //     id: 2,
        // },
        // {
        //     title : "Yo",
        //     text : "Yoooo my Name is Ali",
        //     id: 3,
        // },
    ])

    const [note , setNote] = useState("")
    const [showAddForm , setShowAddForm] = useState(false)

    const clickHandler = (e) => {
        if (note) {
            saveHandler()
        }
        setNote(e)
    }

    const saveHandler = () => {
        const newData = data.filter(e => e.id !== note.id);
        newData.unshift(note)
        setData(newData)
        setNote("")
    }
    const deleteHandler = () => {
        const newData = data.filter(e => e.id !== note.id);
        setData(newData)
        setNote("")
    }
    const addObject = (e) => {
        let obj = {};
        let testId = data.length + 1
        if (!idArry.includes(testId)) {
            obj = {
                title : e ,
                text : "",
                id: testId,
            }
        } else {
            testId += 1;
            obj = {
                title : e ,
                text : "",
                id: testId,
            }
        }
        idArry.unshift(testId);

        // const prevData = data;
        // prevData.unshift(obj)

        setData(prev => [obj ,...prev])
        setNote("")

        setShowAddForm(!showAddForm)
    }
    const showAddFormHandler = () => {
        setShowAddForm(!showAddForm)
        setNote("")
    }
  return (
    <div className={styles.container}>
        <div className={styles.objects}>
            <div className={styles.add}>
                <button onClick={() => showAddFormHandler() }>+</button>
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
        
            {
                showAddForm && <AddForm addObject={addObject} showAddFormHandler={showAddFormHandler} />
            }
    </div>
  )
}
