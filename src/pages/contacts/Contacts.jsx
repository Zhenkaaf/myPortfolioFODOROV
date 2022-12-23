import './contacts.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

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
                e.target.reset();
            }, (error) => {
            });
    }

    return (
        <div className="contacts">
            <div className="wrapper">
                <div className="left">
                    <div className="left__body">
                        <div className="info">
                            <p className="description">You can contact me by:</p>
                            <a className="info__item" href="mailto:zhenkaaf@gmail.com"><EmailIcon className='info__icon' />zhenkaaf@gmail.com</a>
                            <a className="info__item" href="tel:+380668279421"><PhoneIcon className='info__icon' />+38-066-827-94-21</a>
                            <a className="info__item" href="https://t.me/Yevhen_Fodorov" target='_blank'><TelegramIcon className='info__icon' />Telegram</a>
                            <a className="info__item" href="https://www.linkedin.com/in/yevhen-fodorov" target='_blank'><LinkedInIcon className='info__icon' />LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right__body">

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <p className="description">or just write me a letter</p>
                            {/* <label for="name">Name</label> */}
                            <input type="text" placeholder='Name' name='user_name' id='name' />

                           {/*  <label for="email">Email</label> */}
                            <input type="text" placeholder='Email' name='user_email' id='email' />

                          {/*   <label for="message">Message</label> */}
                            <textarea placeholder='Message' name="message" id="message" ></textarea>
                            {emailSent && <span>Thanks, I'll reply ASAP :)</span>}
                            <button>Send message</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;