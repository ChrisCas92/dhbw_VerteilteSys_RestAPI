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
    this.fetchDisplayParties = this.fetchDisplayParties.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayParties() {
    let data = await fetchAllParties();
    this.setState({ parties: data });
    console.log(data);
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title">Lan Parties </div>
        <button id="fetcher" onClick={this.fetchDisplayParties}>
          Welche Lan Parties gibt es in deiner Umgebung?
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.parties.map((party, key) => (
            <div key={key}>
              <h2>{party.name}</h2>
              <p> Findet statt in: {party.location} </p>
              <p> Teilnehmerzahl: {party.participants} </p>
              <p>
                Eventzeitraum: {party.startDate} - {party.endDate}
              </p>
              <p> Einlass: {party.entry} </p>
              <p> Eventstart: {party.start} </p>
              <p> Eventende: {party.end} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
