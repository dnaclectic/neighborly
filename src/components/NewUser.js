import React from 'react';
import { inject, observer } from 'mobx-react';
import { browserHistory, Link } from 'react-router';
import { Jumbotron, Grid, Form, FormGroup, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { Flex } from 'reflexbox';



class NewUser extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
      admin: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handleNewUser(event) {
    const self = this;
    fetch('facebook/usercheck', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(function(result){
      return result.json();
    }).then(function(result) {
      console.log(result);
      if(result.userfound) {
        self.props.userStore.userAlreadyExists = true;
      }else{
        self.NewUser(self.state);
      }
    });
    browserHistory.push('/Welcome');
  }

  NewUser(user) {
    this.props.userStore.newUser = true;
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        password: user.password,
        email: user.email
      })
    });
  }

  render() {
    this.props.userStore.failedLogin = false;
    this.props.userStore.newUser = false;
    this.props.userStore.userAlreadyExists = false;


    return (
      <div style={{paddingTop: "200px"}}>
        <Grid>
          <Flex align="center" justify="center">
            <Jumbotron id="signUpJumbo">
              <Flex align="center" justify="center">
                <Form id="signUpForm">
                  <span id="spanSignUp">Sign Up Here!</span>

                  <FormGroup>
                    <Label>Name</Label>
                    <Input onChange={this.handleNameChange}  value={this.state.name} type="text"
                    Name="form-control" id="name" placeholder="name" size="lg"/>
                  </FormGroup>

                  <FormGroup>
                    <Label>Neighborhood</Label>
                    <Input onChange={this.handleNeighborhoodChange} value={this.state.neighborhood}
                    type="text" Name="form-control" id="neighborhood" placeholder="neighborhood"/>
                  </FormGroup>

                  <FormGroup controlId="formInlinePassword">
                   <Label>Password</Label>
                    <Input onChange={this.handlePasswordChange}
                    type="password" placeholder="password" />
                  </FormGroup>

                  <FormGroup controlId="formInlineEmail">
                    <Label>Email</Label>
                    <Input onChange={this.handleEmailChange}
                    type="text" placeholder="email" />
                  </FormGroup>

                  <div>
                    <Link to ="/" ><Button
                    onClick={this.handleNewUser} onTouchTap={this.handleNewUser}
                    type="submit" className="btn btn-success">Enter</Button></Link>
                  </div>
                </Form>
              </Flex>
            </Jumbotron>
          </Flex>
        </Grid>
      </div>
    );
  }
}

NewUser.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(NewUser));
