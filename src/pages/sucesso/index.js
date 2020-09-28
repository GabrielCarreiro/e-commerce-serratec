import React from 'react';
import { useHistory } from 'react-router-dom';


const Sucesso = () => {
    const history = useHistory();

   setTimeout(() => {
       history.push("/")
   }, 6000);

    return (
        <>
            <div style={{ margin: "20%" }}>Muito Obrigado por compra conosco !</div>
        </>
    )
}

export default Sucesso;