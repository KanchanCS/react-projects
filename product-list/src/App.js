import './App.css';
import ProductList from './Component/Product';
import Header from './Component/Header';
import ApiProductList from './Component/GetApiData'
function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <ApiProductList/>
    </div>
  );
}

export default App;
