import React, {Component} from 'react';
import './SearchPanel.scss'

export default class SearchPanel extends Component {

  handleSearch = (e) => {
    this.setState({
      searchLabel: e.target.value
    });
    console.log(this.state)
    // if( this.props.todos.label)
  }
  render() {

    return (
      <input
          type='text'
          placeholder='type to seatch'
          className='form-control search-input'
          onChange={this.handleSearch}
      />
    );
  }
};