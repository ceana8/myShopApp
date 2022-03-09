import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

//arrow function
const App = () => {
  return (
    <>
    <Header></Header>
    <main>
      <Container>
     <HomeScreen/>
      </Container>
   
    </main>
   
    <Footer/>
    </>
   );

}

export default App;
