import React from 'react';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
        {/* <Contact className="Contact"
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
        /> */}
        <ContactList />  
    </div>
  );
}

export default App;
