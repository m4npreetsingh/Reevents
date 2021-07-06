// import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import './styles.css';

function App() {
  const[formOpen,setFormOpen]= useState(false)

  return (
    <div className=''>
      <Navbar setFormOpen={setFormOpen}></Navbar>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </div>
  );
}

export default App;
