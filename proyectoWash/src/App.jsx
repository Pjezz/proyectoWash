import './App.css'
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Brands from './components/Brands';
import Todo from './components/Todo';
import Sale from './components/Sale';
import References from './components/References';

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
    <section>
      <Sale/>
    </section>
    <section>
      <References/>
    </section>
  </div>
  );
}

export default App
