import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background-color: #eee;
    z-index: 0;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 220px;
    margin: 80px auto;
    background-color: #fff;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background-color: #3194d0;
    border-radius: 15px;
    text-align: center;
    margin: 10px auto;
    cursor: pointer;
`;

