import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({event}) {
    return(
        
        <Segment.Group>
            <Segment>
            <Item.Group>
                <Item>
                <Item.Image size='tiny' circular src={event.hostPhotoURL} ></Item.Image>
                <Item.Content>
                    <Item.Header content={event.title}></Item.Header>
                    <Item.Description >{event.description}</Item.Description>
                </Item.Content>
                </Item>
            </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name ='clock'/>{event.date}
                    <Icon name ='marker'/>{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>(
                        <EventListAttendee attendee={attendee}/>
                    ))}
                   
                </List>
            </Segment>
            <Segment clearing>
                <div>
                {event.description}
                </div>
                <Button content='View' floated='right' color='blue'></Button>
            </Segment>
        </Segment.Group>
        
    )
}