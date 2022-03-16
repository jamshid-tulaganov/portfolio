import './App.css';
import About from './components/about/about.component';
import Contact from './components/Contact/Contact.component';
import { Intro } from './components/intro/intro.component';
import ProductlistComponent from './components/ProductList/ProductList.component';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductlistComponent />
      <Contact />
    </div>
  );
}

export default App;
