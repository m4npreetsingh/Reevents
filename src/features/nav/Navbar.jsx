import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';


export default function Navbar (){
 return(
<Menu fixed='top' inverted color='blue'>
      <Container>
        
        <Menu.Item header style={{cursor:'pointer'}}>
            
            <img src='assets/logo.png' alt='logo'style={{marginRight:'0.5em'}}></img>
            <span >Re-vents</span>
           
           
        </Menu.Item>
        <Menu.Item style={{cursor:'pointer'}} name='Events'></Menu.Item>
        <Menu.Item>
            <Button positive inverted content='Create Event'></Button>
        </Menu.Item>

        <Menu.Item position='right'>
            <Button inverted basic content='Login'></Button>
            <Button inverted basic content='Register' style={{marginLeft:'0.5em'}}></Button>

        </Menu.Item>

      </Container>
  </Menu>

 )
  
} 