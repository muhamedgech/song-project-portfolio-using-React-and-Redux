import React from 'react'
import styled from '@emotion/styled';
const Foot = styled.ul`
  bottom:0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 5px;
  margin-top:50px;
  text-align: center;
`;
export default function footer() {
  return (
        <Foot> 2017 ALX Ethiopia 2017</Foot>
     )
}
