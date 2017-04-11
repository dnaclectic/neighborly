import React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Flex, Box } from 'reflexbox';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navBar navbar-fixed-top">
        <Navbar collapseOnSelect id="nav-margin">
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <Flex>
                <div id="logoDiv">
                  <img id="logo" src="../images/swpl-logo.png" />
                </div>

                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/'}}>
                    <NavItem id="navHome">HOME</NavItem>
                  </LinkContainer>
                </Box>
                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Browse'}}>
                    <NavItem id="navBrowse">BROWSE</NavItem>
                  </LinkContainer>
                </Box>
                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Neighbors'}}>
                    <NavItem id="navNeighbors">NEIGHBORS</NavItem>
                  </LinkContainer>
                </Box>
                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Account'}}>
                    <NavItem id="navAccount">ACCOUNT</NavItem>
                  </LinkContainer>
                </Box>
                <Box col={3} p={3}>
                  <LinkContainer to={{pathname: '/Login'}}>
                    <NavItem id="navLogin">LOGIN</NavItem>
                  </LinkContainer>
                </Box>
              </Flex>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
Navigation.propTypes = {
  logUserOut: React.PropTypes.func
};
export default inject("userStore")(observer(Navigation));
