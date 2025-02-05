import './App.css';
import ProductList from './Component/Product';
import Header from './Component/Header';
import ApiProductList from './Component/GetApiData';
import Forms from './Component/Forms';
function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <ApiProductList />
     <Forms/>
    </div>
  );
}

export default App;
