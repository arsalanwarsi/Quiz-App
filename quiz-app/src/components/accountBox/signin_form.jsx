import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MarginVertical, MutedLinks, SubmitButton } from "./common";



export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);


    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <MarginVertical />
                <MarginVertical />
                <SubmitButton>Signup</SubmitButton>
            </FormContainer>
            <MarginVertical />
            <MarginVertical />
            <div>
                <MutedLinks>
                    Already have account ?
                </MutedLinks>
                <BoldLink href="#" onClick={switchToSignin}> Signin</BoldLink>
            </div>
        </BoxContainer>
    );
}