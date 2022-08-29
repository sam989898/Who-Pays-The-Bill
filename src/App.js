import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Stage_01 from "./components/stage_01";
import Stage_02 from "./components/stage_02";
import { MyContext } from "./context";


class App extends Component{
  static contextType = MyContext;

  render(){
    return(
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who Pays The Bill</h1>
        {this.context.state.stage === 1 ? 
        <Stage_01/>
        :
        <Stage_02/>
        }
        </div>
      </div>
    )
  }
}
export default App;
