import Footer from "./Footer.js";
import Home from "./Home.js";

const App = () => {
  return (
    <>
      <img src = "https://media-exp1.licdn.com/dms/image/C4D1BAQFVhpNDW2MoTw/company-background_10000/0/1568658087480?e=2159024400&v=beta&t=bGVYYEJ4ukiBuMG2NTQZykBPsDmKlY65t3nY86jZmQ8" alt ="pic" width= "1500px" height = "500px"></img> 
      <h1 className = "header">WEATHER WEB</h1> 
      <Home/>
      <Footer />
    </>  
  );
}

export default App;
