import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;


export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MutedLinks = styled.a`
    font-size: 13px;
    color: rgba(200, 200, 200, 1);
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    font-size: 13px;
    color: rgb(117,130,208);
    font-weight: 500;
    text-decoration: none;
    margin: 10px 0;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.5);
    padding: 0 10px;
    transition: all 250ms ease-in-out;
    border-bottom: 2px solid rgba(200, 200, 200, 0.5);

    &::placeholder{
        color: rgba(200, 200, 200, 2);
    }

    &:not(:last-of-type) {
        border-bottom: 2px solid transparent;
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(190,199,235);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 240ms ease-in-out;
    // background: rgb(190,199,235);
    // background: linear-gradient(90deg, rgba(255,244,0,1) 0%, rgba(227,218,21,1) 86%, rgba(255,201,0,1) 100%);
    background: rgb(190,199,235);
    background: linear-gradient(90deg, rgba(190,199,235,1) 0%, rgba(94,113,233,1) 49%, rgba(23,78,201,1) 100%);

    &:hover {
        filter: brightness(1.05);
    }
`;

export const MarginVertical = styled.div`
    margin: 0.4em 0;
`;

export const ErrorMessage = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: rgb(117,130,208);
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 1em;
`;