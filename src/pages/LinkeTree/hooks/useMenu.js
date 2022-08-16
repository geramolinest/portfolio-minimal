import { useState } from "react"

export const useMenu = () =>{
    const [ toggle, setToggle ] = useState(false);

    const onClickMenu  = () =>{
        setToggle(!toggle);
    }

    return [ toggle, onClickMenu ];
}