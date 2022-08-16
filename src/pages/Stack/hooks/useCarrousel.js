import { useState } from "react"

export const useCarrousel  = ( sliderImages ) =>{

    const [ index, setIndex ] = useState(0);
    const [ image, setImage ] = useState(sliderImages[0]);

    const carrouselSize = sliderImages.length;

    const onActions = {
        onPrevious: () =>{
            index === 0 ? setIndex( carrouselSize - 1 ) : setIndex( index - 1 );
            setImage( sliderImages[index] )
        },
        onNext: () =>{
            index === carrouselSize - 1 ? setIndex(0) : setIndex( index + 1);
            setImage( sliderImages[index] )
        }
    }

    return [image, onActions];
}