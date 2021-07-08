import React, { useEffect, useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
export default function EventForm({ setFormOpen, setEvents,createEvent,selectedEvent,updateEvent }) {
  const initialValues = selectedEvent ??{
    title: "",
    category: "",
    venue: "",
    date: "",
    city: "",
    description: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
    ?
    updateEvent({...selectedEvent,...values})
    :
    createEvent({...values,attendees:[],hostedBy:'Bob',hostPhotoURL: '/assets/user.png',id : cuid()})
    setFormOpen(false)
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }


  useEffect(()=>{},[])

  return (
    <Segment clearing>
      <Header content={selectedEvent?"Edit Event":"Create New Event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event Title"
            name="title"
            value={values.title}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="Date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </Form.Field>
        <Button
          type="submit"
          positive
          content="Submit"
          floated="right"
        ></Button>
        <Button
          onClick={() => {
            setFormOpen(false);
          }}
          inverted
          secondary
          content="Cancel"
          floated="right"
        ></Button>
      </Form>
    </Segment>
  );
}
