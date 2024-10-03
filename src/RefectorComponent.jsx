import { useState } from "react";

export default function RefectorComponent({children}){
    const [x , setX] = useState(0);

    return (
        <>
            <button onClick={() => setX(x+1)}>Incriment X</button>
            {children}
            {x}
        </>
    )
}