import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './style.css';

export default function App() {
  
  const cards = data.map(item =>{
    return (
      <Card 
      key={item.id}
      item={item}
      />
    )
  })
  
  return (
    <div>
      <Navbar />
      <div class="container">
        {cards}
      </div>

    </div>
  )
}
