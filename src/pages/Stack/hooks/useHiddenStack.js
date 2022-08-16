import { useState } from "react"

export const useHiddenStack  = () =>{
    const [ hidden, setHidden ] = useState( true );

    const onHidden = () =>{
        setHidden(!hidden);
    }

    return [hidden, onHidden];
}