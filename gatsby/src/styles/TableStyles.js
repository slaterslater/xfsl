import styled from 'styled-components';

export const TableStyles = styled.table`
  border-collapse: collapse;
  text-align:center;
  width: 100%;
  margin-bottom: 35px;
  caption{
    margin-bottom: 10px;
  }
  acronym[title] {
    text-decoration: none;
  }
  th, .th{
    text-transform: uppercase;
    color: var(--darkgrey);
    font-size: small;
    font-weight: bold;
  }
  .th {
    text-align: right;
    width: 20px;
  }
  td {
    min-width:50px;
    padding: 5px;
    @media (min-width:300px){
      min-width: 1px;
    }
  }
`