
import { CardStack } from './components';
import { stackData } from '../../data/stack-data';
import {HiCursorClick } from 'react-icons/hi';

import './styles/stack.css';

const Stack = () => {
    return (
        <div className='stack-main-container'>
            <h2>Stack</h2>
            <HiCursorClick className='cursor-click'/>
            <div className='stack-wrapper'>

                { stackData.map( x => <CardStack stack={x}/>)}
                
            </div>
        </div>
    );
}

export default Stack;
