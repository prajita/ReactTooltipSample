import React, { Component } from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tooltip: false }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    console.log('test hover->' + !this.state.tooltip);
    this.setState({ tooltip: !this.state.tooltip });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.tooltip ? <p data-tip='tooltip' data-for='test'></p> : null}
          <button className="positionCheck" data-for='test' data-tip
            onMouseEnter={() => this.toggle()}
            onMouseLeave={() => this.toggle()}>
            test toolbar
          </button>
          {this.state.tooltip ?
            <ReactTooltip id='test' type='warning' aria-haspopup='true' effect='float' role='example'>
              <span>Show happy face</span>
            </ReactTooltip>
            : null}


        </header>
      </div>
    );
  }
}

export default App;
