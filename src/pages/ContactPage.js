import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: '',
    }
    
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="contact">
                <h3>Napisz do nas</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange}>Wpisz wiadomość</textarea>
                    <button >Wyślij</button>
                </form>
                <Prompt 
                    when={this.state.value}
                    message="Masz niewypełniony formuarz. Czy chcesz opuścić tę stronę?"
                />
            </div>
            
        );
    }
}

export default ContactPage;