import React , { useEffect, useState } from 'react'

// Components
import Note from './shared/Note'

// Styles
import styles from '../styles/Landing.module.css'
import AddForm from './shared/AddForm'
// Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Local Storage Save and Load
import { loadLocal, localSave } from '../helper/localSave';


let idArry = [];


export default function Landing() {
    const [data , setData] = useState([
        // {
        //         title : "Hi",
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

    useEffect(() => {
        let localArry = loadLocal();
        if (localArry !== null) setData(localArry)
        
    } , [])

//  id State
    const [showObject , setShowObject] = useState(true);
    
    const [showNotify , setShowNotify] = useState(false);
    
    const [note , setNote] = useState("")
    const [showAddForm , setShowAddForm] = useState(false)

    const clickHandler = (e) => {
        if (note) {
            saveHandler()
        }
        setNote(e)
        setShowObject(!showObject)
    }
    const saveHandler = () => {
        const newData = data.filter(e => e.id !== note.id);
        newData.unshift(note)
        setData(newData)
        setShowNotify(true)
        toast.success(`Save ${note.title}`, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        // setNote("")
        localSave(data)
        setTimeout(() => {
            setShowNotify(false)
        } , 3000)
    }
    const deleteHandler = () => {
        const newData = data.filter(e => e.id !== note.id);
        const newArry = idArry.filter(i => i !== note.id);
        idArry = newArry;
        setData(newData)
        setNote("")
        setShowObject(!showObject)
        localSave(newData)
    }

    const randomNum = () => {
        let testId = Math.round(Math.random() * 10000)
        let loop = true;
        while (loop) {
            for (let i = 0; i<idArry.length; i++) {
                if (testId === idArry[i]) {
                    randomNum()
                    break;
                }
            }
            break;
        }
        return testId;

    }

    const addObject = (e) => {
        const testId = randomNum();
        const obj = {
            title : e ,
            text : "",
            id: testId,
        }
        idArry.unshift(testId);

        // const prevData = data;
        // prevData.unshift(obj)

        setData(prev => [obj ,...prev])
        setNote("")

        setShowAddForm(!showAddForm)
        localSave(data)
    }
    const showAddFormHandler = () => {
        setShowAddForm(!showAddForm)
        setNote("")
    }
  return (
      <div className={styles.container}>
        <div className={showObject ? styles.objects : styles.objectsHidde} >
            <div className={styles.add}>
                <button autoFocus onClick={() => showAddFormHandler() }>+</button>
            </div>
            <div className={styles.objectsItem} id={showObject ? "objectsHide" : ""}>
                {
                    data && data.map(t => <p className={t.id === note.id ? styles.objSelected : ""} onClick={() => clickHandler(t)} key={t.id}>{t.title}</p>)
                }
                
            </div>
        </div>
        {showNotify && <ToastContainer/>}
        {
            note && <Note showObject={showObject} setShowObject={setShowObject} text={note} setNote={setNote} saveHandler={saveHandler} deleteHandler={deleteHandler}/>
        }
        
            {
                showAddForm && <AddForm addObject={addObject} showAddFormHandler={showAddFormHandler} />
            }
    </div>
  )
}
