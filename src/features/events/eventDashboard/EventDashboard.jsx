import { React } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";



export default function EventDashboard(){

    return(

        <Grid>
            <Grid.Column width={10} ><EventList></EventList></Grid.Column>
            <Grid.Column width={4} >Right</Grid.Column>

        </Grid>

    )

}