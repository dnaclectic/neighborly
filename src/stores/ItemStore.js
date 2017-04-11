import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';

export default class ItemStore {
  constructor  () {
    extendObservable(this, {
      items: [],
      filteredItems: []
    });
    this.newItem = this.newItem.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  setItems(items) {
    this.items = items;
    this.filteredItems = items;
  }

  newItem(item) {
    fetch('/item', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        condition: item.condition,
        description: item.description,
        category: item.category,
        url: item.url,
        owner: item.owner,
        email: item.owner.email
      })
    })
    .then(function(result) {
      return result.json();})
    .then(resultItem => {
      this.items.push(resultItem);
      this.filteredItems.push(resultItem);
      browserHistory.push('/Browse');
    });
  }
}
