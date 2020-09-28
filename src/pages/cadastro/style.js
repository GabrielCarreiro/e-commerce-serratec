


import styled from 'styled-components';

export const Conteudo = styled.div`
    background-color: #7c7ce0;
    display: grid;
    place-items: center;
    width: 400px;
    height: 450px;
    margin: 40px auto;

    form {
        background-color: #fff;
        width: 350px;
        margin: 100px auto;
        padding: 20px;
        border-radius: 10px;
        align-items:center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        opacity: 0.9;
    }

    form input {
        border: none;
        border-bottom: 1px solid;
        width: 300px;
        height: 30px;
        padding: 10px;
        border-color: #7C7CE0;
        color: #fff;
        background-color: transparent;
        
        &:hover,
        &:focus{
            outline: none;
            background-color: #7C7CE0;
            opacity: 0.7;
            color: #fff; 
        } 
    }

    form label{
        text-align: left;
        font-weight: bold;
        color: #7c7ce0;
        width: 320px;
    }    

    form button{
        width: 100%;
        height: 30px;
        background-color: #3ec300;
        color: #fff;
        border: 0;
        border-radius: 6px;
        transition: 0.2s;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        text-align: center;
        margin: 20px auto;
        padding: 5px;
        font-size: 16px;
        font-weight: bold;

        &:hover{
            background-color: #46d900;
            color: #fafafa;
        }
}
  
`;


