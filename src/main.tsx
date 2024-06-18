// START GENAI@CHATGPT4
import React from 'react';
import ReactDOM from 'react-dom';
import MiniApp1 from './MiniApp1';
import { createRoot } from 'react-dom/client';

// Wrap your React bootstrap code in a function
/*function startApp() {
  ReactDOM.render(
    <React.StrictMode>
      <MiniApp1 />
    </React.StrictMode>,
    document.getElementById('miniapp')
  );
}*/
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MiniApp1 />
  </React.StrictMode>
);

// Attach that function to the window object
declare global {
  interface Window {
    miniapp1: {
      [x: string]: () => void;
      init: () => void;
    };
  }
}

window.miniapp1 = {
  init: function() {
    console.log('From MiniApp -> Miniapp1 initialized');
    //startApp();
    //console.log('From MiniApp -> Miniapp1 startApp called');
  }
};

// END GENAI@CHATGPT4
