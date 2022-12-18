import './contacts.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';


const Contacts = () => {

    const formRef = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qrmv7pf',
            'template_x2hqzze',
            formRef.current,
            'mJ6NdehvHp4nV-1Xm'
        )
            .then((result) => {
                setEmailSent(true);
            }, (error) => {
            });
    }

    return (
        <div className="contacts">
            <div className="wrapper">
                <div className="left">
                    <p className="description">You can contact me with:</p>
                </div>
                <div className="right">
                    <p className="description">or just write me a letter</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Company' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea id="" cols="30" rows="5" placeholder='Message' name="message" ></textarea>
                        <button>Submit</button>
                        {emailSent && <span>Thank for your message</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contacts;