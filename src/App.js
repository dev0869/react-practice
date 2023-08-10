import React from 'react'
import Modalcomponent from './npm package/modal/Modalcomponent'
import Test3 from './Test3';
import { useState } from 'react';
import './index.css'
import Test1 from './Test1';
const App = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };

  return (
    <div>
      <div className="section full-height">
        <input
          className="modal-btn"
          type="checkbox"
          id="modal-btn"
          name="modal-btn"
        />
        <label htmlFor="modal-btn">
          Open Modal <i className="uil uil-expand-arrows"></i>
        </label>
        <div className="modal">
          <div className="modal-wrap">
            <img src="https://assets.codepen.io/1462889/sl3.jpg" alt="" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        <a
          href="https://front.codes/"
          className="logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App