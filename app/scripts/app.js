import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './main.css';

const app = document.getElementById('app');

class CoreApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {spells: {}};
    this.getData = this.getData.bind(this);
  }

  getData() {

    const url = 'data/spellData.json';

    fetch(url, {
      method: 'get',
    }).then((response) =>
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    ).then((data) => {
      that.setState({
        spells: data.spells
      });
    }).catch(() => {
      throw new Error("Bad response from server");
    });

  }

}

ReactDOM.render(<CoreApp /> , app);