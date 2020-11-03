import React, { Component } from 'react';

export default class PortfolioManager extends Component {
  render() {
    return (
      <div>
      
      <form >
        <input 
          type="text"
          name="Portfolio item"
          placeholder="Portfolio Item Name"
          />

        <input 
          type="url"
          name="url"
          placeholder="URL"
          />
        
        <input 
          type="text"
          name="position"
          placeholder="Position"
          />

        <label for="options" />
        <select id="options" name="options">
          <option value="eCommerce"></option>
          <option value="Scheduling"></option>
          <option value="Enterprise"></option>
        </select>


      </form>
      </div>
    );
  }
}