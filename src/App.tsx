import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import StyleProps from './components/StyleProps';

function App() {
  const onHandleClick = (event: React.MouseEvent<Element>, id: number) => {
    console.log('Button Clicked', event, id);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div className='App'>
      <Button onClick={onHandleClick} />
      <Input value='keyur' handleChange={onHandleChange} />
      <StyleProps styles={{padding: 0}} />
    </div>
  );
}

export default App;
