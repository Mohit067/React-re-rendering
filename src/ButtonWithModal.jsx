// import { useState } from 'react'
// import Modal from './Modal';

// export default function ButtonWithModal(){

//     const [isOpen , setIsOpen] = useState();

//     return(
//         <>
//             <button onClick={() => setIsOpen(true)}>Open Modal</button>
//             {isOpen && <Modal setIsOpen = {setIsOpen}/>}
//         </>
//     )
// } 




// import { useState } from 'react'
// import Modal from './Modal';

// export default function ButtonWithModal(){

//     const [isOpen , setIsOpen] = useState();

//     return(
//         <>
//             <button onClick={() => setIsOpen(true)}>Open Modal</button>
//             {isOpen && <Modal setIsOpen = {setIsOpen}/>}
//         </>
//     )
// } 

import useModalDialog from "./hooks/useModalDialog"
import Modal from './Modal';

export default function ButtonWithModal(){

    const {isOpen, open , close} = useModalDialog();

    return(
        <>
            <button onClick={open}>Open modal</button>
            {isOpen && <Modal close = {close} />} 
        </>
    )
} 
