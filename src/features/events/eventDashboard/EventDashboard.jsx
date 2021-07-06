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
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent}></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            events={events}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
          ></EventForm>
        )}
      </Grid.Column>
    </Grid>
  );
}
