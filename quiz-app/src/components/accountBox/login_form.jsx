import React, { useContext, useState } from "react";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MarginVertical, MutedLinks, SubmitButton } from "./common";



export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitForm = (e) => {
        e.preventDefault();

        console.log(email + ' ' + password);
    }

    return <BoxContainer>
        <FormContainer action="" onSubmit={submitForm}>
            <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
            <Input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
            <MarginVertical />
            <MutedLinks href="#">Forgot your password?</MutedLinks>
            <MarginVertical />
            <MarginVertical />
            <SubmitButton type="submit">Signin</SubmitButton>
        </FormContainer>
        <MarginVertical />
        <MarginVertical />
        <MutedLinks>
            Don't have account ?
            <BoldLink href="#" onClick={switchToSignup}> Signup</BoldLink>
        </MutedLinks>
    </BoxContainer>
}