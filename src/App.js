import React from 'react';
import Contact from './components/Contact';

function App({props}) {
  return (
    <div className="App">
        <Contact className="Contact"
          avatar="https://randomuser.me/api/portraits/women/10.jpg"
          name="Kim Mendoza"
          isOnline
        />
        <Contact className="Contact"
          avatar="https://randomuser.me/api/portraits/women/49.jpg"
          name="Tamara Neal"
        />
        <Contact className="Contact"
          avatar="https://randomuser.me/api/portraits/men/63.jpg"
          name="Gavin Weaver"
          isOnline
        />   
    </div>
  );
}

export default App;
