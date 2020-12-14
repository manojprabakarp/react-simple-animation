import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Testcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ["Click to fade away"]};
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({items: ["Click to fade away"]});
  }
  fade(i) {
    this.setState({items: []});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.fade(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <h3>Simple Animation</h3>
        <button onClick={this.show}>Show</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Testcomponent

