import "./App.css";
// import Button from "./components/Button";
import Navbar from "./components/Navbar";
// import logo from "./assets/images/logo2.svg";
import FlashSalesCard from "./components/FlashSalesCard";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <img src={logo} alt="logo" /> */}

      <FlashSalesCard />

      {/* <h1>Hello World from React js</h1>

      <h4>Complete this form</h4>
      <form>
        <label>Email</label>
        <input type="email" name="email" />
        <Button />
      </form> */}
    </div>
  );
}

export default App;
