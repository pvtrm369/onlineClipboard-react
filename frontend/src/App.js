import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Output from './components/Output';
//import OutputText from './components/OutputText';

function App() {
  return (

    <>

      <Navbar />
     <div className="container">

      <Textarea />
    </div>

      <div className="container">

        <Output/>
      </div>
      

    </>

  );



}

export default App;
