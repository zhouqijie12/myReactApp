import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom' 
import React, { Component } from 'react'

class Aa extends Component{
    render(){
        let {location, match, history, history: {length, action} }  = this.props
        return (
            <div className="aa">
                <p><span style={{'color': 'red'}}>location: </span>{JSON.stringify(location,null,2)}</p>
                <p><span style={{'color': 'red'}}>match: </span>{JSON.stringify(match,null,2)}</p>
                <p><span style={{'color': 'red'}}>history: </span>{JSON.stringify(history,null,2)}</p>
                我是Aa
                <p>id:{new URLSearchParams(location.search).get('id')}</p>
                <p>id:{new URLSearchParams(location.search).get('name')}</p>
                <p>{length}</p>
                {action}
            </div>
        )
    }
}
class Bb extends Component{
    render(){
        let {location, match, history}  = this.props
        return (
            <div className="bb">
                <p><span style={{'color': 'red'}}>location: </span>{JSON.stringify(location,null,2)}</p>
                <p><span style={{'color': 'red'}}>match: </span>{JSON.stringify(match,null,2)}</p>
                <p><span style={{'color': 'red'}}>history: </span>{JSON.stringify(history,null,2)}</p>
                我是Bb
            </div>
        )
    }
}

class RouterComponent extends Component{
    render(){
        return (
            <Router>
                <div>
                <AddressBar></AddressBar>
                <ul className="linkLi">
                    <li><Link to="/aa?id=123&name=minooo">aa</Link></li>
                    <li><Link to="/bb">bb</Link></li>
                    <li><Link to="/cc">ccc</Link></li>
                    <li><Link to="/dd/react/router">dddd</Link></li>
                    <li><NavLink activeClassName="select" to="/bb">eeee</NavLink></li>
                </ul>
                    <Route exact path="/aa" component={Aa}></Route>
                    <Route path="/bb" component={Bb}></Route>
                    <Route path="/cc" render={()=> <div>CCCCCCC</div>}></Route>
                    <Route path="/dd/:page/:supage?" render={({location, match, history})=> {
                        return (
                            <div>dddd
                                <p><span style={{'color': 'red'}}>location: </span>{JSON.stringify(location,null,2)}</p>
                                <p><span style={{'color': 'red'}}>match: </span>{JSON.stringify(match,null,2)}</p>
                                <p><span style={{'color': 'red'}}>history: </span>{JSON.stringify(history,null,2)}</p>
                            </div>
                        )
                    }}></Route>
                </div>
            </Router>
        )
    }
}

class AddressBar extends Component{
    render(){
        return(
            <Route render={({location, match, history}) => {
                    return (
                        <div>
                            <div>location URL: {JSON.stringify(location,null,2)}}</div>
                            <div>match URL: {JSON.stringify(match,null,2)}}</div>
                            <div>history URL: {JSON.stringify(history,null,2)}}</div>
                        </div>
                    )
                }}>
            </Route>
        )
    }
}
export default RouterComponent