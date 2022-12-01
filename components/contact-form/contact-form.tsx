import { useEffect, useState } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

interface IContactDetails {
    name: string;
    email: string;
    message: string;
}

async function sendContactData(contactDetails: IContactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
    }

    return data;
}

function ContactForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState<'pending' | 'success' | 'error' | null>();
    const [requesterror, setRequestError] = useState<null>();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [])

    async function sendMessageHandler(event: any) {
        event.preventDefault();
        setRequestStatus('pending');
        try {
            await sendContactData({
                email,
                name,
                message
            })
            setRequestStatus('success');
        } catch (e) {
            setRequestError(e.message);
            setRequestStatus('error');
        }

    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: requestStatus,
            title: 'Sending message...',
            message: 'Your message is on its way'
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: requestStatus,
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: requestStatus,
            title: 'Error!',
            message: requesterror
        }
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
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
        </section>
    )
}

export default ContactForm;