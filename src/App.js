import Button from "./Components/Button";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.App}>
      <Button>First Button</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='text'>Text</Button>
      <Button disableShadow>Disabled Shadow</Button>
      <Button disabled>Disabled</Button>
      <Button variant ='text' disabled>Text Disabled</Button>
    </div>
  );
}

export default App;
