import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MarginVertical, MutedLinks, SubmitButton } from "./common";



export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <MarginVertical />
            <MutedLinks href="#">Forgot your password?</MutedLinks>
            <MarginVertical />
            <MarginVertical />
            <SubmitButton>Signin</SubmitButton>
        </FormContainer>
        <MarginVertical />
        <MarginVertical />
        <MutedLinks>
            Don't have account ?
            <BoldLink href="#" onClick={switchToSignup}> Signup</BoldLink>
        </MutedLinks>
    </BoxContainer>
}