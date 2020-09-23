import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #7c7ce0;
    }

    html,body, #root{
        height: 100%
    }

    body, input, button{
        font: 16px sans-serif;
    }

    button{
        curso: pointer;
    }

    #root{
        max-width: 900px;
        margin: 0 auto;
        padding: 40px  20px;
    }

`;