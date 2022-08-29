import React, {useContext,useRef,useState} from 'react';
//import Button from 'react-bootstrap/Button'
import { Button, Alert } from 'react-bootstrap';
import { MyContext } from '../context';
import Form from 'react-bootstrap/Form'


const Stage_01 =()=>{
    const textInput = useRef();
    const context = useContext(MyContext);
    const [error,setError]=useState([false,''])

    const handleSubmit=(e)=>{
        e.preventDefault();
        const value =textInput.current.value;
        const validate= validateInput(value)

        if(validate){
        //form validate:add player
        setError([false,'']);
        context.addplayer(value);
        textInput.current.value='';

    }
}

    const validateInput=(value)=>{
        if (value == '') {
            setError([true,'Sorry, You need to add something']);
            return false;
        }
        if (value.length <= 2) {
            setError([true,'Sorry, You need 3 char at least']);
            return false;
        }
        return true;
    }
console.log(context);
    return(
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                    type="text"
                    placeholder="Add Player Name"
                    name="player"
                    ref={textInput}
                    />
                </Form.Group>
                {error[0]?
                <Alert variant="danger">
                    {error[1]}
                </Alert>
                :
                null
                }

                <Button className="miami" variant="primary" type="submit">
                Add Player
            </Button>
            {context.state.players.length > 0 ?
            <>
            <hr/>
            <ul className="list-group">
                {context.state.players.map((item,idx)=>(
                    <li key={idx} className="list-group-item d-flex
                    justify-content-between align-items-center
                    list-group-item-action">
                        {item}
                    <span className="badge badge-danger"
                    onClick={()=>{context.removePlayer(idx)}}>x</span>    
                    </li>

                ))}
            </ul>
            <div 
            className="action_button"
            onClick={()=>context.next()}>
                NEXT
            </div>
            </>
            :null    }
            </Form>

            
        </>
)
    
}
export default Stage_01;