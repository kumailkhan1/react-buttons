/* eslint-disable no-useless-escape */
import Button from "./Components/Button/Button";
import classes from "./App.module.css";
function App() {
  return (
    <div>
      <h1>Buttons</h1>

      <div className={classes.App}>
        <p>{`<Button \>`}</p>
        <p>{`&:hover, &:focus`}</p>
      </div>

      <div className={classes.App}>
        <Button>Default</Button>
        <Button>Default</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button variant='outline'\>`}</p>
        <p>{`&:hover, &:focus`}</p>
      </div>

      <div className={classes.App}>
        <Button variant='outline'>Default</Button>
        <Button variant='outline'>Default</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button variant='text'\>`}</p>
        <p>{`&:hover, &:focus`}</p>
      </div>

      <div className={classes.App}>
        <Button variant='text'>Default</Button>
        <Button variant='text'>Default</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button disableShadow />`}</p>
      </div>

      <div className={classes.App}>
        <Button disableShadow>Default</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button disabled />`}</p>
        <p>{`<Button variant='text' disabled>`}</p>
      </div>

      <div className={classes.App}>
        <Button disabled>Default</Button>
        <Button variant='text' disabled>Text Disabled</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button startIcon='local_grocery_store'>`}</p>
        <p>{`<Button endIcon='local_grocery_store'>`}</p>
      </div>

      <div className={classes.App}>
        <Button startIcon='local_grocery_store'>Start Icon</Button>
        <Button endIcon='local_grocery_store'>End Icon</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button size='sm'>`}</p>
        <p>{`<Button size='md'>`}</p>
        <p>{`<Button size='lg'>`}</p>
      </div>

      <div className={classes.App}>
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
      </div>

      <div className={classes.App}>
        <p>{`<Button color='default'>`}</p>
        <p>{` <Button color='primary'>`}</p>
        <p>{` <Button color='secondary'>`}</p>
        <p>{` <Button color='danger'>`}</p>
      </div>

      <div className={classes.App}>
        <Button color='default'>Default</Button>
        <Button color='primary'>Default</Button>
        <Button color='secondary'>Default</Button>
        <Button color='danger'>Default</Button>

      </div>

    </div>
  );
}

export default App;
