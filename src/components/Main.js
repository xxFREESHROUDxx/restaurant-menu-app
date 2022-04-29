import React from 'react';
import FoodItems from './FoodItems';

function Main(props) {
  const { items, onAdd } = props;
  return (
    <main className='block col-2'>
      <h2>Food Items</h2>
      <div className='row'>
        {items.map((item) => (
          <FoodItems key={item.id} item={item} onAdd={onAdd}></FoodItems>
        ))}
      </div>
    </main>
  );
}

export default Main;
