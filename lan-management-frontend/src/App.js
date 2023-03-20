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
    console.log(data);
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
              <h2>{party.name}</h2>
              <p> Findet statt in: {party.location} </p>
              <p> Teilnehmerzahl: {party.participants} </p>
              <p> Startdatum: {party.startDate} </p>
              <p> Enddatum: {party.endDate} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;