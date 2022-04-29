import React from 'react';

export default function FoodItems(props) {
  const { item, onAdd } = props;
  return (
    <div>
      <img src={item.image} alt={item.name} className='small'></img>
      <h3>{item.name}</h3>
      <div>Rs.{item.price}</div>
      <div>
        <button onClick={() => onAdd(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
