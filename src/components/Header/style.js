import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 40px;

  ul {
    display: flex;
    list-style:none;
    
    li {
      font-size: 16px;

      & + li {
        margin-left: 15px;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #04D361;
        }
      }

      span {
        color: #333;
        cursor: pointer;

        &:hover {
          color: #04D361;
        }
      }
    }
  }
`;