import { useState } from 'react';
import s from './about.module.scss';


const About = () => {

    const data = [
        {
            id: 1,
            question: 'Tell us about yourself ?',
            answer: 'Hi! I am from Kharkiv, Ukraine. I want to find such company where I will be useful and where I will have the opportunity to learn, develop and improve my skills. I have experience of work online in a team of 10 people. I successfully completed QA course from AltexSoftLab where I learned about software development life cukle, methods of testing, requirements, Scrum methodology and other concepts useful for web developer also. After this course I got job offer. But Frontend development turned more interesting for me. I learned HTML, CSS/SCSS, JS, React by myself on such level that I could wrote few my own projects and some of them I deployed on GitHub Pages. I have practical experience of work with such technologies and libraries like "Redux", "Firebase", "Axios", "Formik", "Email.js", "Typed.js", "Git". I consistently study something new, now it is "TypeScript" and "CMS Strapi". I am assiduous, responsible and with a strong desire to develop as a Frontend developer.'
        },
        {
            id: 2,
            question: 'What is your level of English ?',
            answer: 'I think that I have pre-intermediate level of English. But I take English lessons twice a week, so I am in process of improving my English.'
        },
        {
            id: 3,
            question: 'What have you been doing for the last 10 years ?',
            answer: 'I have experience in gardening, furniture and printing industry, in sales. I always worked in small teams. Recent years I worked at automotive factories in Poland, so I know Polish language a little bit.'
        },
        {
            id: 4,
            question: 'Why programmer? What do you like in this profession ?',
            answer: "I want to obtain real profession, as craft. In such area, where I can grow, develop without restrictions. You know, I have experience physically hard and without any perspective work, sometimes outside, sometimes in a bad weather. I am fed up with this. And honestly I don't see sense to live such way further. That's why I like profession programmer. I like that in this profession you haven't got restrictions. I like feelings when I can resolve some task or understand how works some algorithm. I like that I can work at the desk in comfortable office or from home. I like that this job isn't phisically hard. I like that there are perspectives and opportunity to constantly develop. And I am feeling that I can bring more useful to this world working as a programmer."
        },
        {
            id: 5,
            question: 'Where do you see yourself in 5 years ?',
            answer: "In the first 2-3 years I see myself becoming be a true expert at my role as a frontend developer. I plan to really immerse myself in this position to be useful and efficient as possible for team and company. And I hope that after next 2-3 years, my skills and knowledge will enough to share them with more younger employees and help them to become true expert."
        },
    ];

    const [openAccordion, setOpenAccordion] = useState(1);
    const toggleAccordion = (id) => {
        setOpenAccordion(id);
    }

    return (
        <div className={s.about}>
                <div className={s.container}>
                    <div className={s.accordion}>
                        <h2 className={s.accordion__title}>FAQ</h2>
                        {data.map(item => (
                            <div className={s.item} onClick={() => toggleAccordion(item.id)} key={item.id}>
                                <div className={s.item__question}>
                                    <h3>{item.question}</h3>
                                    <div className={s.item__btn}>
                                        <span className={`${s.item__minus} ${openAccordion === item.id && s.item__plus}`}></span>
                                    </div>
                                </div>
                                <div className={s.item__answer}>
                                    <p className={`${s.inactiveAnswer} ${openAccordion === item.id && s.activeAnswer}`}>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}
export default About;