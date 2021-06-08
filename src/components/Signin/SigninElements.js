import styled from 'styled-components'

export const SigninContainer = styled.div`
    background: #10273c;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const SigninH1 = styled.h1`
    color: #fff;
    font-size: 46px;
    padding-bottom: 30px;
    text-decoration: underline overline;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    } 

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`

export const UserNameContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    padding-top: 20px;

    @media screen and (max-width: 768px) {
        padding-top: 10px;
    } 

    @media screen and (max-width: 480px) {
        padding-top: 8px;
    }
`
export const PasswordContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding-top: 10px;
    } 

    @media screen and (max-width: 480px) {
        padding-top: 8px;
    }
`

export const Label = styled.label`
    font-size: 20px;
    color: #fff;
    padding-bottom: 16px;
    padding-top: 16px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding-bottom: 16px;
        padding-top: 16px;
    } 

    @media screen and (max-width: 480px) {
        font-size: 16px;
        padding-bottom: 16px;
        padding-top: 16px;
    }
`

export const Input = styled.input`
    width: 100%;
    background: #BDDCED;
    border: 3px solid #65D6F9;
    border-radius: 10px;
    color: #000;
    font-size: 16px;
    padding: 7px;


    @media screen and (max-width: 768px) {
        padding: 7px;
    } 

    @media screen and (max-width: 480px) {
        padding: 7px;
    }
`

export const SigninBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 600px;
    width: 500px;
    border-radius: 30px;
    background-color: rgba(0,0,0,0.6);
    border: 2px solid #fff;

    @media screen and (max-width: 768px) {
        height: 600px;
        width: 500px;
    } 

    @media screen and (max-width: 480px) {
        height: 400px;
        width: 300px;
    }
`