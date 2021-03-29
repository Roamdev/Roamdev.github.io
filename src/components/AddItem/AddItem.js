import React, { Component } from 'react';

import './AddItem.scss'

export default class AddItem extends Component {
  // const {onAdded} = this.props;
  render() {
    const {onAdded} = this.props
    return (
      <div className="add-item">
      {/* <input
        type='text'
        text={text}
      ></input> */}
      <button
        className='btn btn-outline-secondary'
        onClick={() => onAdded('work')}
        >Add Todo
      </button>
    </div>
    )
  }
};
