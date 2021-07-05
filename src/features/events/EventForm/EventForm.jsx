import React from "react";
import {Segment,Header,Form,Button} from 'semantic-ui-react'
export default function EventForm(){

    return(
        <Segment clearing>
            <Header content='Create New Event'/>
            <Form>
                <Form.Field>
                    <input type='text'placeholder='Event Title'/>
                </Form.Field>
                <Form.Field>
                    <input type='text'placeholder='Category'/>
                </Form.Field>
                <Form.Field>
                    <input type='text'placeholder='Description'/>
                </Form.Field>
                <Form.Field>
                    <input type='text'placeholder='City'/>
                </Form.Field>
                <Form.Field>
                    <input type='text'placeholder='Venue'/>
                </Form.Field>
                <Form.Field>
                    <input type='Date'placeholder='Date'/>
                </Form.Field>
                <Button type='submit' positive content='Submit' floated='right' ></Button>
                <Button  inverted secondary content='Cancel' floated='right' ></Button>

            </Form>
            
        </Segment>
    )
}