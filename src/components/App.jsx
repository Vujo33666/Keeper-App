import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import firebase from "../firebase";
import AddNote from "./AddNote";
import { v4 as uuidv4 } from 'uuid';

function App(){

    const [notes,setNotes] = useState([]);
    const ref=firebase.firestore().collection("notes");

    function handleNotes(newNote){
        ref
        .doc(uuidv4())
        .set(newNote)
        .catch((err) => {
          console.error(err);
        });
        setNotes(prev => [...prev,newNote]);
    }

    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((value,index)=>{
                    return id!==index;
                });
        });
        console.log("ovo je id:" + id);

       /* ref
            .doc(id)
            .delete()
            .catch((err)=>{
                console.log(err);
            });*/
    }

    function getNotes(){
        ref.onSnapshot((querySnap)=>{
            const items = [];
            querySnap.forEach((doc)=>{
                items.push(doc.data());
            });
            setNotes(items);
        })
    }

    useEffect(()=>{
        getNotes();
    },[]);

    return(
        <div>
            <Header />
            <AddNote onChecked={handleNotes}/>
            {notes.map((note,index)=>
                <Note
                id={index}
                key={index}
                title={note.title}
                content={note.content}
                deleteThisNote={deleteNote}
            />
            )}
            <Footer />
        </div>
    );
}

export default App;