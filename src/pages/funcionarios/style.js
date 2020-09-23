import styled from 'styled-components';

export const Funcionario = styled.div`
    background-color: #7c7ce0;
    margin-top: 40px;
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    div{
        display: block;
        text-align: center;
        max-width: auto;
        padding: 10px;
        border-radius: 8px;
        background-color: #fff;

        &:hover{
            opacity: 0.9;
        }


        h3{
            color: #4d4d4d;
        }
        
        p{
            font-size: 18px;
            color: #a1a1a1; 
        }
        div{
            display:block;
        }
        span{
            display: flex;
            justify-content: space-between;

            a{  
                text-decoration: none;
                color: #7c7ce0;
                font-weight: bold;
                transition: 0.2s;

                &:hover{
                    color: #6666ba;
                }  
            }
        }
    }


`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-end;
    
    button{
        width: 120px;
        height: 45px;
        background-color: #3ec300;
        color: #fff;
        border: 0;
        border-radius: 8px;
        
        transition: 0.2s;

        &:hover{
            background-color: #46d900;
            color: #fafafa;
        }

    }

`;
