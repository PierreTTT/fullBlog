import { useState } from 'react';
import classes from './contact-form.module.css';

function ContactForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function sendMessageHandler(event:any) {
        event.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email,
                name,
                message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={(e) => sendMessageHandler(e)}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor={'email'}>Your Email</label>
                        <input type="email" id="email" required value={email} onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor={'name'}>Your Name</label>
                        <input type="text" id="name" required value={name} onChange={event => setName(event.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='message'>Your Message</label>
                        <textarea id='message' rows={5} required value={message} onChange={event => setMessage(event.target.value)}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button>Send Message</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;