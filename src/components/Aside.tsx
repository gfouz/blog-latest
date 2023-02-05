import styled from 'styled-components'

interface IAsideProps {
  color?: string;
  bg?: string;
}

export const Aside = styled.aside<IAsideProps>`
 grid-area: aside;
 display: flex;
 flex-direction: column;
 align-items: center;
 color: ${(props) => props.color };
 background-color: ${(props) => props.bg };
 `;