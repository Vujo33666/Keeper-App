import React, {useState} from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { v4 as uuidv4 } from 'uuid';

function AddNote(props){

    const [isExpanded, setExpanded] = useState(false);

    const [note,setNote] = useState({
        id: uuidv4(),
        title: "",
        content: ""
    });

    function handleNote(event){
        const {name,value} = event.target;
        setNote(previous=>{
            return{
                ...previous,
                [name]:value
            }
        });

    }

    function submitNote(event){
        props.onChecked(note);
        setNote({
            title:"",
            content:"",
            id: ""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return(
        <div>
        <form className="create-note">
            { isExpanded ? 
                <input name="title" onChange={handleNote} type="text" value={note.title} placeholder="Title"></input>
                : null
            }
            <textarea onClick={expand} name="content" onChange={handleNote} type="text" 
                value={note.content}
                rows={isExpanded ? 3 : 1}
                placeholder="Add a note...">
            </textarea>
            <Zoom in={isExpanded}>
            <Fab
                onClick={submitNote}
            >
                <AddCircleIcon />
            </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default AddNote;