import worksImg1 from './../img/w1.png';
import worksImg2 from './../img/w2.png';

export const worksProjects = [
    {
        id: 1,
        img: worksImg1,
        link: 'https://zhenkaaf.github.io/chatFirebaseFODOROV/',
        description: 'Based on requirements that I found on web, implemented chat. For login and store data I used "Firebase". For generation automatic answer-message in chat I used "Chuck Norris Api". Learnt "createContext" method and two hooks "useContext" and "useReducer".',
        gitHubLink: 'https://github.com/Zhenkaaf/chatFirebaseFODOROV',
        linkToRequrements: 'https://drive.google.com/file/d/18KIvWQLOTE7VkNEHj_mlOy1NuOpxS0AQ/view?usp=sharing'
    },
    {
        id: 2,
        img: worksImg2,
        link: 'https://zhenkaaf.github.io/myPortfolioFODOROV/',
        description: 'My portfolio website - completely my idea, implemented on my knowledges. For navigate between pages I used "ReactRouter" library. For sending emails I used "Email.js", for text typing effect I used "Typed.js". Added some icons using "Material UI", for describing styles I used "SCSS" preprocessor. Also used such hooks like "useEffect", "UseState", "useRef".',
        gitHubLink: 'https://github.com/Zhenkaaf/myPortfolioFODOROV',
    }
]