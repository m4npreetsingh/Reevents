import React from 'react';
import { Item, List } from 'semantic-ui-react';

export default function EventListAttendee() {
    return(
        <>
        <List.Item>
            <Item.Image circular size='mini' src='/assets/user.png'></Item.Image>
        </List.Item>
        </>
    )
}