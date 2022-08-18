import './styles/about-me.css';
import 'animate.css';
import { useRef } from 'react';
import { useViewPort } from '../hooks/useViewPort';

const AboutMe = () => {
    
    const element = useRef();
    const [ visible ] = useViewPort(element);
    const element2 = useRef();
    const [ visible2 ] = useViewPort(element2)

    return (
        <div className='about-me-container'>
            <h2 ref={element} className={visible ? 'animate__animated animate__fadeIn' : 'title-about-me'}>About Me</h2>
            <p ref={element2} className={visible2 ? 'animate__animated animate__fadeInDown' : 'text-about-me'}>
            I am a software engineer with years of experience in the field of design and development of software solutions, 
            passionate about learning, challenges, and above all, computer science, finding it fascinating to analyze, 
            design and develop solutions through technology. 
            I have participated in projects in the financial, billing, electro mobility and pharmaceutical fields.
            </p>
        </div>
    );
}

export default AboutMe;
