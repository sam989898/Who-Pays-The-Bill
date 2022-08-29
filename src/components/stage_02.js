import React,{useContext} from 'react';
import { MyContext } from '../context';
const Stage_02 =()=>{
    const context = useContext(MyContext);
    return(
        <>
        <div className="result-wrapper">
            <h3>The looser is:</h3>
            <div>{context.state.result}</div>
            <div className="action_button"
            onClick={()=>context.resetGame()}>
                START OVER
            </div>
        <div className="action_button btn_2" 
        onClick={ ()=>context.getNewLooser()}>
            GET NEW LOOSER
        </div >

        </div>
        </>
)
    }
export default Stage_02;