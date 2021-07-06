// import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import './styles.css';

function App() {
  const[formOpen,setFormOpen]= useState(false)

  const[selectedEvent,setSelectedEvent]=useState(null);

  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
  }
  function handleFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true)
  }

  return (
    <div className=''>
      <Navbar setFormOpen={handleFormOpen}></Navbar>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent}/>
      </Container>
    </div>
  );
}

export default App;
