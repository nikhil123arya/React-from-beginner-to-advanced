import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRaing';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating onSetRating={setMovieRating} />
      <p>The rating given is {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating 
      maxRating={5} 
      messages={['Terrible', "bad", 'okay', "good", "Amazing"]} 
    />
    <StarRating maxRating={23} size={20} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);

