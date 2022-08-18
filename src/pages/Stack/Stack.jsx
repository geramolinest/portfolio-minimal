
import { CardStack } from './components';
import { stackData } from '../../data/stack-data';
import {HiCursorClick } from 'react-icons/hi';
import { useRef } from 'react';

import './styles/stack.css';
import 'animate.css';

import { useViewPort } from '../hooks/useViewPort';

const Stack = () => {

    const element = useRef();
    const [ visible ] = useViewPort(element);

    return (
        <div className='stack-main-container'>
            <h2 ref={element} className={visible ? 'animate__animated animate__fadeInRight' : 'title-stack'}>Stack</h2>
            <HiCursorClick className='cursor-click'/>
            <div className={visible ? 'stack-wrapper animate__animated animate__fadeInLeft' :'stack-wrapper'}>

                { stackData.map( x => <CardStack stack={x}/>)}
                
            </div>
        </div>
    );
}

export default Stack;
