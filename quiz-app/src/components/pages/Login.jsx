
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from '../accountBox';

const AppContainer = styled.div`
  width: 100%;
  height 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {

    const userAuth = localStorage.getItem("token");

    if (userAuth != null) {
        return <Navigate to="/home" />;
    }
    return (<>
        <AppContainer>
            <AccountBox />
        </AppContainer>
    </>);
}

export default Login