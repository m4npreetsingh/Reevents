import { React, useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../EventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({ formOpen, setFormOpen,selectEvent,selectedEvent }) {
  const [events, setEvents] = useState(sampleData);
  function handleCreateEvent(event){
    setEvents([...events,event])
  }

  function handleUpdateEvent(event){
    setEvents(events.map(evt=>evt.id===event.id?event:evt));
    
  }
  function handleDeleteEvent(event){
    console.log(event.id);
    setEvents(events.filter(evt=>evt.id !== event.id));
    
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            events={events}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent?selectedEvent.id:null}
            updateEvent={handleUpdateEvent}
            
          ></EventForm>
        )}
      </Grid.Column>
    </Grid>
  );
}
