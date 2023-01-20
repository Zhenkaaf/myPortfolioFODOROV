import { useState } from 'react';
import s from './about.module.scss';


const About = () => {

    const data = [
        {
            id: 1,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
        {
            id: 2,
            question: 'What question would you like to ask? Long question',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
        {
            id: 3,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
        },
        {
            id: 4,
            question: 'What question would you like to ask?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam nam deleniti officiis doloremque itaque placeat earum, quis eos pariatur quas, eius ipsam laborum ea quo a maiores quibusdam ratione!'
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