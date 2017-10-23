import React, { Component,PropTypes } from 'react';


class Header extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};
  render() {
  	console.log('items', this.props.items);
    return (
      <div class="container">
      {this.props.items.map((item, index) =>
      	<a href={item.link} key={index}>{item.label}</a>
      	)}
      </div>
      );
  }
}

export default Header;
