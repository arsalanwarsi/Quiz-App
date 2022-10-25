import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Quiz from "./components/pages/Quiz";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import NoMatch from "./components/pages/NoMatch";
import { AuthProvider } from "./utilities/Auth";
import RequireAuth from "./utilities/RequireAuth";

function App() {
  return (<>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>);
}

export default App;
