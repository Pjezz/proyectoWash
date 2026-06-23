import './App.css'
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Brands from './components/Brands';
import Todo from './components/Todo';

function App() {
  

  return (
  <div>
    <section>
    <NavBar/>
    </section>
    <section>
    <Info/>
    </section>
    <section>
      <Brands/>
    </section>
    <section>
      <Todo/>
    </section>
  </div>
  );
}

export default App
