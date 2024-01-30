//import React from 'react';
//import UserProvider from './index.js';
//import Login from './login.js';
//import NavBar from './NavBar';

const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
// const UserContext = React.createContext(null);

function Card(props){
    function classes(){
        const bg = props.bgcolor ?' bg-' + props.bgcolor : '';
        const txt = props.txtcolor ?' text-' + props.txtcolor: 'text-white';
        return 'card mb-3 ' + bg + txt;
    }
    return(
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<h5 className="createStatus">{props.status}</h5>)}
                </div> 
        </div>
    )
}

