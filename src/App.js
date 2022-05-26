import { Navbar, Product } from "./Components";
import useCart from "./Hooks/useCart";
function App() {
  const { total, setTotal } = useCart();
  return (
    <div className='App font-sans font-normal'>
      <Navbar setTotal={setTotal} total={total} />
      <Product setTotal={setTotal} />
    </div>
  );
}

export default App;
