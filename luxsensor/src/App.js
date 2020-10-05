import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import BarChart from './BarChart';
import GaugeChart from 'react-gauge-chart';
import fire from './config';

class App extends Component {


  constructor() {
    super()

    this.f1 = fire.database().ref().child('node1/Device Name');
    this.f2 = fire.database().ref().child('node1/Device Role');
    this.f3 = fire.database().ref().child('node1/Temperature/ºC');
    this.f5 = fire.database().ref().child('node1/Temperature/ºC');
    this.f4 = fire.database().ref().child('node1/Last Updated');
    
    this.state = {
      DeviceName: [],
      DeviceRole: [],
      TempCel: [],
      Update: [],
      TempFah: [],
    }

  }

  componentDidMount() {
    this.f1.on('value', snap => {
      this.setState({
        DeviceName: snap.val(),
      });
    });
    this.f2.on('value', snap => {
      this.setState({
        DeviceRole: snap.val(),
      });
    });
    this.f3.on('value', snap => {
      this.setState({
        TempCel: snap.val(),
      });
    });
    this.f5.on('value', snap => {
      this.setState({
        TempFah: snap.val(),
      });
    });
    this.f4.on('value', snap => {
      this.setState({
        Update: snap.val(),
      });
    });
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Temperature Sensor</h1>
          <p>
            <h4>Device Name: {this.state.DeviceName}</h4>
            <h4>Device Role: {this.state.DeviceRole}</h4>
            <h4>Temperature in Celcius: {this.state.TempCel} °C</h4>
            <h4>Temperature in Fahrenheit : {this.state.TempFah} F</h4>
            <h4>Last Update: {this.state.Update} </h4>
          </p>
          <div className="Barchart">
            <BarChart />
          </div>
          <div>
            <h3>°C % chart:</h3>
            <GaugeChart
              className="Gchart"
              id="gauge-chart1"
              arcsLength={[0.9, 0.5, 0.2]}
              colors={["#5BE12C", "#F5CD19", "#EA4228"]}
              percent={this.state.TempCel / 30}
              arcPadding={0.02}
            />
          </div>
        </header>
      </div>
    );
  }
}


export default App;
