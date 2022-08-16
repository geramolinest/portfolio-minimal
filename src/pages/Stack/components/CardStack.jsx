import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import { HiChevronUp } from 'react-icons/hi'
import { useCarrousel, useHiddenStack } from '../hooks';

const CardStack = ({ stack }) => {

    const { titleStack, itemsStack} = stack;
    
    const [ image, onActions ] = useCarrousel(itemsStack);

    const { onPrevious, onNext } = onActions;

    const [ hidden, onHidden ] = useHiddenStack();

    return (
        <div className='card-stack-container'>
            <span onClick={onHidden} className={!hidden ?  'span-unhidden' : 'span-hidden'}>
                <h3>{titleStack}</h3>
            </span>
            <div className={ !hidden ? 'card-body' : 'card-body-hidden'}>
                <MdOutlineArrowLeft onClick={onPrevious} className='set-item-arrow'/>
                <div className='div-container-image-title'>
                    <div className='img-container'>
                        {image.icon}
                    </div>
                    <h5>{image.titleTech}</h5>
                </div>
                <MdOutlineArrowRight onClick={onNext} className='set-item-arrow'/>
                <HiChevronUp className='close-arrow-icon' onClick={onHidden}/>
            </div>
        </div>
    );
}

export default CardStack;
