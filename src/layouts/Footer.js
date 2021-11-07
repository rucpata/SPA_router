import React from 'react'
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <h2>Stopka</h2>
            <Route path='/' exact render={(props)=> <p>Jesteś na stronie głównej</p>
                }/>
            <Route path='/:page' exact render={(props)=> {
                console.log(props);
                return(
                    <p>Jesteś na stronie <span>{props.match.params.page}</span></p>
                )
            }}/>

            <Route path='/:page/:idProduct' exact render={(props)=> {
                console.log(props);
                return(
                    <p>Jesteś na stronie <span>{props.match.params.idProduct}</span></p>
                )
            }}/>
        </div>
    )
}

export default Footer;