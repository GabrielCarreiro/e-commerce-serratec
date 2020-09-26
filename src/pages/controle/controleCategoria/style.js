import styled from 'styled-components'

export const Botao = styled.span`
    display: flex;
    margin: 50px 0 30px 0;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3ec300;
        color: #fff;
        width: 150px;
        height: 60px;
        border-radius: 8px;
        border: 0;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        font-weight: 700;

        &:hover{
            background-color: #46d900;
            color: #fafafa;
            cursor: pointer;
        }
    }
`;

export const Conteudo = styled.div`
    
    display: flex;
    background-color: #fff;
    justify-content: center;
    max-width: 360px;
    height: 360px;
    margin:150px auto;
    background-color: #f5f5f5;
    

    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px;
        margin: 20px;

        label{
            color: #7C7CE0;
            font-weight: 600;
        }

        input{
            border: none;
            border-bottom: 2px solid;
            padding: 8px;
            width: 100%;
            border-color: #7C7CE0;
            color: #000;
            background-color: transparent;
            margin-bottom: 10px;

            &:hover,
            &:focus{
                outline: none;
                background-color: #7C7CE0;
                opacity: 0.7;
                color: #fafafa; 
            }

        }
        
        button{
            margin: 50px auto 0px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #3ec300;
            color: #fff;
            width: 120px;
            height: 60px;
            border-radius: 8px;
            border: 0;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            font-weight: 700;

            &:hover{
                background-color: #46d900;
                color: #fafafa;
                cursor: pointer;    
            }
        }
    }
`;