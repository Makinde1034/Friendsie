import React,{createContext,useState} from 'react'


export const BurgerState =  createContext();

function BurgerContext(props) {

    const [Click, setClick] = useState(false)

    return (
        <BurgerState.Provider value={{slide:[Click,setClick]}}>
            {props.children}
        </BurgerState.Provider>
    );
}

export default BurgerContext;
