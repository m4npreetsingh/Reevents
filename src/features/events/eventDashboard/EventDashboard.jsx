import { React } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../EventForm/EventForm";
import{sampleData} from '../../../app/api/sampleData';



export default function EventDashboard(){

    return(

        <Grid>
            <Grid.Column width={10} ><EventList events={sampleData}></EventList></Grid.Column>
            <Grid.Column width={6}> <EventForm></EventForm> </Grid.Column>

        </Grid>

    )

}