import React, { useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, ErrorMessage, FormContainer, Input, MarginVertical, MutedLinks, SubmitButton } from "./common";
import { useAuth } from "../../utilities/Auth";



export function LoginForm(props) {

    const { switchToSignup } = useContext(AccountContext);
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const auth = useAuth();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        status: false,
        message: ''
    });

    const submitForm = (e) => {
        e.preventDefault();


        const user = {
            email,
            password,
        };

        if (email === '' || password === '') {
            setError({
                status: true,
                message: 'All fields are required.'
            });
        } else {
            setError({
                status: false,
                message: ''
            });
            document.getElementById("login-btn").disabled = true;
            axios
                .post('http://127.0.0.1:8000/api/login', user)
                .then((res) => {
                    if (res.data.status === true) {
                        localStorage.setItem('token', res.data.token);
                        auth.login(res.data.user.email);
                        console.log(res);
                        navigate(redirectPath, { replace: true });
                    }
                    else {
                        document.getElementById("login-btn").disabled = false;
                        setError({
                            status: true,
                            message: 'Invalid user credentials.'
                        });
                    }
                })
                .catch((err) => {
                    document.getElementById("login-btn").disabled = false;
                    setError({
                        status: true,
                        message: 'Invalid user credentials.'
                    });
                });
        }
    }

    return <BoxContainer>
        <FormContainer action="" onSubmit={submitForm}>
            <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="on" />
            <Input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="on" />
            <MarginVertical />
            <MarginVertical />
            {error.status ? <ErrorMessage>{error.message}</ErrorMessage> : ''}
            <SubmitButton type="submit" id="login-btn">Signin</SubmitButton>
        </FormContainer>
        <MarginVertical />
        <MarginVertical />
        <MutedLinks href="#">Forgot your password?</MutedLinks>
        <MarginVertical />
        <MarginVertical />
        <MarginVertical />
        <div>
            <MutedLinks href="/">
                Don't have account ?
            </MutedLinks>
            <BoldLink href="#" onClick={switchToSignup}> Signup</BoldLink>
        </div>
        <MarginVertical />
    </BoxContainer>
}