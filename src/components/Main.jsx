// Main Bar Component
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import Data from './Data';

//Using Use-state Hook for state changes
const Main = ({ width, height, onResize }) => {
  const [size, setSize] = useState({ width, height });

  // Function to handle resize 
  const handleResize = (event, { size }) => {
    setSize(size);
    if (onResize) {
      onResize({ width: size.width, height: size.height });
    }
  };

  return (
    // Component Rendering
    <Resizable
      width={size.width}
      height={size.height}
      onResize={handleResize}
      minConstraints={[200, 200]}
    >
      <div
       className='main'
        style={{
          width: size.width + 'px',
          height: size.height + 'px',
          border: '2px solid #000',
          resize: 'both',
          overflow: 'auto'
        }}
      >
        <div className='main-content'>

       <Data/>
        
        <h3>You can easily Resize the component by dragging mouse through Bottom-Right &#x2198;</h3>


      {/* <img className='img' src='https://images.unsplash.com/photo-1682695795798-1b31ea040caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D' alt="Image 3"   /> */}
        
      </div>

        </div>
    </Resizable>
  );
};

export default Main;
