import React from 'react';

export default class Results extends React.PureComponent {
    getPair() {
        return this.props.pair || [];
      };

      render() {
        return <div className="results">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <h1>{entry}</h1>
            </div>
          )}
        </div>;
  };
}