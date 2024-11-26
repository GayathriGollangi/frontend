import './App.css';
import Button from './Button/Button';
import Terenary from './Terenary/Terenary';

function App() {
  const redButton=()=>{
    alert("redButton clicked");
  }

  const yellowButton=()=>{
    alert("yellowButton clicked");
  }

  const greenButton=()=>{
    alert("greenButton clicked");
  }
  return (
    <div className="App">
      <Button text={"heloo"}  bgcolor={"red"} click ={redButton}/>
      <Button text={"Welcome"}  bgcolor={"green"} click={greenButton}/>
      <Button text={"React"}  bgcolor={"yellow"} click={yellowButton}/>

      
    <Terenary/>
    </div>
  );
}

export default App;
