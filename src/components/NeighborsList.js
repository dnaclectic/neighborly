import React from 'react';
import { inject, observer } from 'mobx-react';
import { Card,  CardTitle, CardText, CardImg } from "reactstrap";

NeighborsList.propTypes = {
  account: React.PropTypes.object,
  userStore: React.PropTypes.object,
  newUser: React.PropTypes.array,
  user: React.PropTypes.array
};

function NeighborsList(props) {
  let addedUsers = props.userStore.map(function(users) {
    return (
      <Card block key={users._id}>
        <CardImg top width="100%" src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvYsLi4rTkCeFnOwk70fQfecW6g1mBRKgE4hNPsc3QdFCQmaJoH-8xVuQ"} rounded alt="Card image cap"/>
        <Card block inverse
          style={{ backgroundColor: '#333', borderColor: '#333', width: '100%'}}>
          <CardTitle>{users.name}</CardTitle>
          <CardText>{users.neighborhood}</CardText>
        </Card>
      </Card>
    );
  });

  return (
    <div>
      {addedUsers}
    </div>
  );
}

export default inject('userStore')(observer(NeighborsList));
