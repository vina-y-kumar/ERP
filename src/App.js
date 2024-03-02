import React, { useState } from 'react';
import LeftSidebar from './components/Sidebar';
import Main from './components/Main';
import Bottom from './components/Bottom';
import Data from './components/Data';


const App = () => {
  const [SidebarWidth, setLeftSidebarWidth] = useState(200);
  const [mainSize, setMainSize] = useState({ width: 600, height: 400 });
  const [bottomSize, setBottomSize] = useState({ width: 600, height: 200 });

  const handleLeftSidebarResize = ({ width }) => {
    setLeftSidebarWidth(width);
  };

  const handleMainResize = ({ width, height }) => {
    setMainSize({ width, height });
  };

  const handleBottomResize = ({ width, height }) => {
    setBottomSize({ width, height });
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftSidebar width={SidebarWidth.width} onResize={handleLeftSidebarResize} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Main width={mainSize.width} height={mainSize.height} onResize={handleMainResize} />
        <Bottom width={bottomSize.width} height={bottomSize.height} onResize={handleBottomResize} />
        
      </div>
      {/* <Data/> */}
    </div>
  );
};

export default App;
