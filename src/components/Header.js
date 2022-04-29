import React from 'react';

function Header(props) {
  return (
    <header className='row block center'>
      <div>
        <a href='#/'>
          <h1>Restaurant Menu App</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>
          Cart{' '}
          {props.countCartItems ? (
            <button className='badge'>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href='#/signout'>SignOut</a> <a href='/order-history'>History</a>
      </div>
    </header>
  );
}

export default Header;
