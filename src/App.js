import Billing from './components/Billing';
import Main from './components/Main';
import Header from './components/Header';
import data from './data';
import { useState, useEffect } from 'react';

function App() {
  const { items } = data;
  const cartHistory = localStorage.getItem('cart-history');

  const [cartItems, setCartItems] = useState(
    cartHistory === null ? [] : JSON.parse(cartHistory)
  );

  useEffect(() => {
    localStorage.setItem('cart-history', JSON.stringify(cartItems));
  });

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className='App'>
      <Header countCartItems={cartItems.length} />
      <div className='row'>
        <Main items={items} onAdd={onAdd} />
        <Billing cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
