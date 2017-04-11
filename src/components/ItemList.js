import React from 'react';
import { inject, observer } from 'mobx-react';
import { Card,  CardImg , Button} from "reactstrap";
import '../../public/style.css';

ItemList.propTypes = {
  items: React.PropTypes.array.isRequired,
  account: React.PropTypes.object,
  filteredtext: React.PropTypes.string,
  userStore: React.PropTypes.object,
  user: React.PropTypes.object
};

function ItemList(props) {
  let addedItems = props.items.map(function(item) {
    let addedBy = (item && item.owner ? (item.owner.name) : "");
    let emailOwner = (item && item.owner ? item.owner.email : "");
    return (
      <Card block key={item._id} id="outerCard">
        <CardImg top width="100%" src={item.url} id="cardImg"/>
        <Card id="innerCard" >
          <h2 id="cardTitle">{item.description}</h2>
          <h4 id="cardSubtitle">{item.category}</h4>
          <h4 id="cardText">Condition: {item.condition}</h4>
          <div id="itemOwner">{addedBy}
          <h5><a href={"mailto:" + [emailOwner]}>Email the Owner</a></h5>

          </div>
        </Card>
      </Card>
    );
  });

  return (
    <div>
      {addedItems}
    </div>
  );
}

export default inject('userStore', 'itemStore')(observer(ItemList));
