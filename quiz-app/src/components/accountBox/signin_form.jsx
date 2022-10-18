import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MarginVertical, MutedLinks, SubmitButton } from "./common";



export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);


    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <MarginVertical />
            <SubmitButton>Signup</SubmitButton>
        </FormContainer>
        <MarginVertical />
        <MarginVertical />
        <MutedLinks>
            Already have account ?
            <BoldLink href="#" onClick={switchToSignin}> Signin</BoldLink>
        </MutedLinks>
    </BoxContainer>
}