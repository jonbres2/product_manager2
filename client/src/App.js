import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main'
import ProductList from './views/ProductUpdate'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ProductList path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
