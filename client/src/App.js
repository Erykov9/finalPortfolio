import Register from "./components/features/Register/Register";
import MainPage from "./components/pages/MainPage/MainPage";
import Navi from './components/views/Navi/Navi';
import Footer from "./components/views/Footer/Footer";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Login from "./components/features/Login/Login";
import Calculator from "./components/features/Calculator/Calculator";
import PasswordGenerator from "./components/features/PasswordGenerator/PasswordGenerator";

import { Container, Row } from 'react-bootstrap';
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/calculator',
      element: <Calculator/>
    },
    {
      path: '/passwordgen',
      element: <PasswordGenerator/>
    }
  ])
  return (
    <>
      <Navi/>
        <Container>
          <Row>
            {routes}
          </Row>
        </Container>
      <Footer/>
    </>
  );
}

export default App;
