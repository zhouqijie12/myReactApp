import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterComponent from './react-router'
import ToDo from './todo'
import './App.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
function Welcome(props){
    return <h3>{props.title}</h3>
}
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            m: 1
        }
    }
    hander = () =>{
        this.setState((state)=>{
            return {
                m: state.m + 1
            }
        })
        this.setState((state)=>{
            return {
                m: state.m + 1
            }
        })
        this.setState((state)=>{
            return {
                m: state.m + 1
            }
        })
    }
    render(){
        return (
            <React.Fragment>
                <p>{this.state.m}</p>
                <button onClick={this.hander}>test</button>
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <div className="todoapp">
        {/* {Welcome({'title':'cccc'})}
        <Welcome title="aaa"/>
        <Test></Test>
        <RouterComponent></RouterComponent> */}
        {/*todolist 例子*/}
        <ToDo/>
    </div>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
