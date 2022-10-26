
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../utilities/Auth";
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
    const auth = useAuth();

    if (auth.user) {
        return <Navigate to="/" />;
    }
    return (<>
        <AppContainer>
            <AccountBox />
        </AppContainer>
    </>);
}

export default Login