import React from 'react';
import axios from 'axios';
import './styles.css';

class App extends React.Component {
  state = {
    login: '',
    id: '',
    node_id: '',
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dqxy')
      .then(res => {
        console.log(res.data);
        this.setState({
          login: res.data.login,
          id: res.data.id,
          node_id: res.data.node_id
        });
      })
      .catch(err => console.log(err.message));

    axios
      .get('https://api.github.com/users/dqxy/followers')
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err.message));

  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="user">Login: {this.state.login}<br/>User id: {this.state.id}<br/>Node id: {this.state.node_id}
        </div>
        <div className="followers">
          <h2>&nbsp;&nbsp;&nbsp;Followers&nbsp;&nbsp;&nbsp;</h2>
          {this.state.followers.map(follow => (
            <h3>{follow.login}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
