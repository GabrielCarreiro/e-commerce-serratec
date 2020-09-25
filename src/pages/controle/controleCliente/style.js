import styled from 'styled-components';


export const Table = styled.div` 
margin:60px;
column-rule-width: 1px;
border: 1px solid #ddd;
background: whitesmoke;
box-align:  auto;

th{

padding: 10px;
text-align: center;
background-color: #7c7ce0;
color: whitesmoke;

}

td {
    
    text-align: left;
    padding:5px;
    width: 500px;  
}

tr:nth-child(even) {background-color: #c1c1f4;}

tr:hover {
    background-color: #ddd;
}

`;




