// Bottom Component
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';

const Bottom = ({ width, height, onResize }) => {
  const [size, setSize] = useState({ width, height });

// Function to handle resizing
  const handleResize = (event, { size }) => {
    setSize(size);
    if (onResize) {
      onResize({ width: size.width, height: size.height });
    }
  };
// Component Rendering
  return (
    <Resizable
      width={size.width}
      height={size.height}
      onResize={handleResize}
      minConstraints={[200, 100]}
    >
      <div
      className='bottom'
        style={{
          width: size.width + 'px',
          height: size.height + 'px',
          border: '2px solid #000',
          resize: 'both',
          overflow: 'auto'
        }}
      >
        <div className='bottom-content'>
        <h2>Bottom Bar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque, incidunt ut sunt doloribus rerum, magni quasi ex eveniet facilis vel in quaerat adipisci! Unde nihil aliquam ratione consequatur eos.
        </p>
        <h3>You can easily Resize the component by dragging mouse through Bottom-Right &#x2198;</h3>


        </div>
      </div>
    </Resizable>
  );
};

export default Bottom;
