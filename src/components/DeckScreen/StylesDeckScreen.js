import styled from "styled-components";

export const ScreenContaier = styled.div`
  background-color: #13ecec;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`
export const StatusPerguntas = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 5px;
`
export const Finalizacao = styled.div`
    text-align: center;
    margin-bottom: 20px;
    span {
        margin-left: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    p {
        margin-top: 20px;
    }
`