import React from 'react';
import { useState } from 'react';

const SaludoOriginal = ({saludo}) => {
    const [msj,setMsj] = useState("");
    return (
        <article className="display-5">
             <p> Hello {saludo}  
             {" "+msj}</p>  
            <button className="btn btn-info mx-3" onClick={() => setMsj("(from changed state)")} >Click Me</button>
        </article>
    );
};

export default SaludoOriginal;