import React from "react";
import { fetchAllParties } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllParties();
    this.setState({ parties: data });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Lan Parties </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Welche Lan Parties gibt es in deiner Umgebung?
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.parties.map((party, key) => (
            <div key={key}>
              {party.title} by {party.author}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
