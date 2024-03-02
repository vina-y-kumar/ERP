// Sidebar Component
import React, { useState } from 'react';
import '../App.css';
import { Resizable } from 'react-resizable';

const LeftSidebar = ({ onResize }) => {
  const [width, setWidth] = useState(200);

  //Funtion to Handle Resize
  const handleResize = (event, { size }) => {
    setWidth(size.width);
    if (onResize) {
      onResize({ width: size.width });
    }
  };
//Component Render
  return (
    <Resizable
      width={width}
      height={Infinity}
      onResize={handleResize}
      minConstraints={[100, 200]}
      maxConstraints={[400, Infinity]}
    >
      <div
        className='sidebar'
        style={{
          width: width + 'px',
          height: '100%',
          borderRight: '1px solid #000',
          resize: 'horizontal',
          overflow: 'auto'
        }}
      >
        <div className='sidebar-content'>
        <h2>Left Sidebar</h2>
        <h3>You can easily Resize the component by dragging mouse through Bottom-Right &#x2198;</h3>
        
        <img  src='https://images.unsplash.com/photo-1708348244831-07e906ded4ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Image 3"  style={{height:'20vw', borderRadius:'5px'}} />
        </div>
      </div>
    </Resizable>
  );
};

export default LeftSidebar;
