import './App.css';
import Header from './components/header';
import headerData from './data/header_data'
import Form from './components/form';

function App() {

  return (
    <div className="App">
      <Header header={headerData} />
       <Form /> 
    </div>
  );
}

export default App;
