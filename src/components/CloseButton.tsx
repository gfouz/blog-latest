import styled from 'styled-components'

export const CloseButton = styled.button`
  position: fixed;
  top: 14px;
  right: 1em;
  width: 30px;
  height: 30px;
  color: #ff0000;
  display: flex;
  justify-content: center;
  line-height: 26px;
  font-weight: bolder;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 10px #777777;
  &:hover {
    color: white;
    background-color: red;
  }
`;