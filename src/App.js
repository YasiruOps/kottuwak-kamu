
import './App.css';

import React from 'react'
import Video1 from "./zombie.mp4"
import Vid2 from "./tessay.mp4"

function App() {
  return (
      <div className='outermain'>
          <video className='video'  src={Video1} autoPlay loop muted/>
          <p className="ammo"> කොත්තුවක් කමුතෙ</p>
          </div>
  );
}
// test
export default App;
