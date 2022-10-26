import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./login_form";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signin_form";

const BoxContainer = styled.div`
    width:280px;
    min-height: 550px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0  2px rgba(15, 15, 15, 0.3);
    position: relative;
    overflow: hidden;
`;

const TopDrop = styled.div`
    width: 100%;
    height: 160px;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    // background: rgb(255,244,0);
    // background: linear-gradient(90deg, rgba(255,244,0,1) 0%, rgba(227,218,21,1) 86%, rgba(255,201,0,1) 100%);
    background: rgb(190,199,235);
    background: linear-gradient(90deg, rgba(190,199,235,1) 0%, rgba(94,113,233,1) 49%, rgba(23,78,201,1) 100%);
`;

const HeaderContiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainHeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SubHeaderText = styled.h5`
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  z-index: 10;
  margin: 10px 0 0 0;
`;

const InnerContainer = styled.div`
    // width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;

const backdropVariants = {
    expanded: {
        width: "250%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.1,
    stiffness: 30
}

export function AccountBox(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const palyEnpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignup = () => {
        palyEnpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }

    const switchToSignin = () => {
        palyEnpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 500);
    }

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopDrop>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === "signin" && <HeaderContiner>
                        <MainHeaderText>WELCOME</MainHeaderText>
                        <MainHeaderText>Back</MainHeaderText>
                        <SubHeaderText>Please signin to continue!</SubHeaderText>
                    </HeaderContiner>}
                    {active === "signup" && <HeaderContiner>
                        <MainHeaderText>CREATE</MainHeaderText>
                        <MainHeaderText>Account</MainHeaderText>
                        <SubHeaderText>Please signup to continue!</SubHeaderText>
                    </HeaderContiner>}
                </TopDrop>
                <InnerContainer>
                    {active === "signin" && <LoginForm />}
                    {active === "signup" && <SignupForm />}
                    {/* <p onClick={palyEnpandingAnimation}>clickme</p> */}
                </InnerContainer>
            </BoxContainer >
        </AccountContext.Provider>
    );
}