import styled from "styled-components";

export const Block = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  margin: 0;
  background-color: ${props => (props.isLight ? " #FCF0E8" : "#C4A38F")};
  text-align: center;
`;

export const HeaderText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  margin: 0;
  padding-top: 4%;
  padding-bottom: 1%;
  color: #000;
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #000;
`;

export const Container = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.div`
  margin: 5px;
  width: 350px;
`;
