import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.forground.lighter};
  background: ${({ theme, focused }) =>
    focused ? theme.primary.darker : theme.secondary.lighter};
`;

export const Input = styled.input`
  padding: 8px;
  margin: 10px;
  border-radius: 3px;
`;
