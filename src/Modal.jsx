// export default function Modal({setIsOpen}){
//     return (
//         <div className="modal">
//             <h2>Modal</h2>
//             <p>this is modal</p>
//             <button onClick={() => setIsOpen(false)}>Close</button>
//         </div>
//     )
// }

export default function Modal({close}){
    return (
        <div className="modal">
            <h2>Modal</h2>
            <p>this is modal</p>
            <button onClick={close}>Close</button>
        </div>
    )
}