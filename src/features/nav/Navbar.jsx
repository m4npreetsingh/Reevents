import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navbar({ setFormOpen }) {
  return (
    <Menu fixed="top" inverted color="blue">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header style={{ cursor: "pointer" }}>
          <img
            src="assets/logo.png"
            alt="logo"
            style={{ marginRight: "0.5em" }}
          ></img>
          <span>Re-vents</span>
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/events' style={{ cursor: "pointer" }} name="Events"></Menu.Item>
        <Menu.Item>
          <Button
          as={NavLink} exact to='/createevent'
            onClick={() => {
              setFormOpen();
            }}
            positive
            inverted
            content="Create Event"
          ></Button>
        </Menu.Item>

        <Menu.Item position="right">
          <Button inverted basic content="Login"></Button>
          <Button
            inverted
            basic
            content="Register"
            style={{ marginLeft: "0.5em" }}
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
