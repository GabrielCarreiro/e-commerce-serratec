import styled from 'styled-components';

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
    max-width:960px;
    height: 380px;
    margin:150px auto;
    background-color: #f5f5f5;
    

    .grupo{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 2fr;
        grid-template-rows: 25% 25% 25% 25%;
        column-gap: 5px;
        row-gap: 10px;
        margin: 20px 30px 0 0;
        
        label{
            color: #7C7CE0;
            font-weight: 600;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }

        input{
            border: none;
            border-bottom: 2px solid;
            width: 100%;
            height: 100%;
            padding: 8px;
            border-color: #7C7CE0;
            color: #000;
            background-color: transparent;
            
            &:hover,
            &:focus{
                outline: none;
                background-color: #7C7CE0;
                opacity: 0.7;
                color: #fafafa; 
            }

        }

        select{
            border: none;
            border-bottom: 2px solid;
            border-color: #7C7CE0;
            background-color: transparent;
            padding: 8px 8px 0 8px;

            &:hover,
            &:focus{
                outline: none;
                background-color: #7C7CE0;
                opacity: 0.6;
                color: #fafafa; 
            }
            
        }
        
        button{
            position: absolute;
            left:50%;
            bottom:30%;
            transform: translateX(-50%);
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
