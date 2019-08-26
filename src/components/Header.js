import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{fontSize: '2.5rem'}}>TodoList</h1>
      
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '20px'
}

export default Header;