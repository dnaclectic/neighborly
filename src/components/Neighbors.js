import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import NeighborsList from './NeighborsList';
import Navigation from './Navigation';
import { CardColumns } from "reactstrap";

class Neighbors extends React.Component {
  constructor(props) {
    super(props);
    this.loadUserFromServer = this.loadUserFromServer.bind(this);
  }


  loadUserFromServer() {
    fetch('/user')
      .then(function(result) {return result.json();})
      .then(user => this.props.userStore.newUser(user));
  }

  render() {
    return (
      <div>
        <div>
          <Navigation/>
        </div>

        <div>
          <Grid>
            <Jumbotron style={{ backgroundColor: '#D1D5D8' }}>
              <CardColumns>
                <NeighborsList users={this.props.userStore.id}/>
              </CardColumns>
            </Jumbotron>
          </Grid>
        </div>
      </div>
    );
  }
}


Neighbors.propTypes = {
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  items: React.PropTypes.object,
  user: React.PropTypes.object,
};

export default inject ('userStore')(observer(Neighbors));
