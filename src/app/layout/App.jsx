// import { Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import './styles.css';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Container className='main'>
      <EventDashboard/>
      </Container>
    </div>
  );
}

export default App;
