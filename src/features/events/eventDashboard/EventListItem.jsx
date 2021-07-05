import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem() {
    return(
        
        <Segment.Group>
            <Segment>
            <Item.Group>
                <Item>
                <Item.Image size='tiny' circular src='/assets/user.png' ></Item.Image>
                <Item.Content>
                    <Item.Header content='Event Title'></Item.Header>
                    <Item.Description >Hosted by someone</Item.Description>
                </Item.Content>
                </Item>
            </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name ='clock'/>Date
                    <Icon name ='marker'/>Venue
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAttendee/>
                    <EventListAttendee/>
                    <EventListAttendee/>
                </List>
            </Segment>
            <Segment clearing>
                <span>
                    Description
                </span>
                <Button content='View' floated='right' color='blue'></Button>
            </Segment>
        </Segment.Group>
        
    )
}