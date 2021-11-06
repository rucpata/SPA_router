import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='login'>
            <label htmlFor="">Podaj login<input type='text'/></label>
            <label htmlFor="">Podaj hasło<input type='text'/></label>
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;