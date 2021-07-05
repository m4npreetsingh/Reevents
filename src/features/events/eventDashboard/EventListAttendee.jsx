import React from 'react';
import { Item, List } from 'semantic-ui-react';

export default function EventListAttendee({attendee}) {
    return(
        <>
        <List.Item>
            <Item.Image circular size='mini' src={attendee.photoURL}></Item.Image>
        </List.Item>
        </>
    )
}