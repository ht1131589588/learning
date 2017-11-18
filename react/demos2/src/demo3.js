import React from 'react';
export function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            {unreadMessages && unreadMessages.length>0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }

export class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }

export function NumberList (props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}