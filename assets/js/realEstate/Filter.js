import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      let { cities } = this.props.globalState.populateFormsData;
      return cities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      let { homeTypes } = this.props.globalState.populateFormsData;
      return homeTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }

  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      let { bedrooms } = this.props.globalState.populateFormsData;
      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }

  }
  
  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="neighborhood">City</label>
        <select name="neighborhood" className=" filters neighborhood" onChange={this.props.change}>
          <option value="All">All</option>
          {this.cities()}
        </select>
        <label htmlFor="homeType">Home Type</label>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All</option>
          {this.homeTypes()}
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="1">0+ Bedroom</option>
          {this.bedrooms()}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
        </div>
        <div className="filters extras">
          <span className="title">
            Extras
          </span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input type="checkbox" value="swimming_pool" name="swimming_pool" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input type="checkbox" value="finished_basement" name="finished_basement" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input type="checkbox" value="gym" name="gym" onChange={this.props.change} />
          </label>
        </div>
      </div>
    </section>)
  }
}

