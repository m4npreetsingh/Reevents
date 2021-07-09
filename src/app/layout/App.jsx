// import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import './styles.css';
import {Route} from 'react-router-dom'
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';

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
      {/* <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent}/> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/events' component={EventDashboard} />
      <Route exact path='/events/:id' component={EventDetailedPage} />
      <Route exact path='/createEvent' component={EventForm} />
      </Container>
    </div>
  );
}

export default App;
