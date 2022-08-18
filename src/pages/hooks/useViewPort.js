import { useEffect, useState } from "react"

export const useViewPort = ( element ) =>{

    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            }, { rootMargin: '5px' }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return [ visible ];
}