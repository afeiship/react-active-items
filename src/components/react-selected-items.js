import React, {PureComponent, Children} from 'react';
import {createElement, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

import {SELECTED_KEY} from './const';

export default class extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['toggle', 'radio', 'checkbox']),
  };

  static defaultProps = {
    value: [],
    onChange: noop,
    type: 'toggle',
  };

  constructor(props) {
    super(props);
    this.state = {
      items: this.getItems()
    };
  }

  radio(inItem) {
    let {items} = this.state;
    items.forEach((item) => {
      if (inItem === item) {
        inItem[SELECTED_KEY] = true;
      } else {
        item[SELECTED_KEY] = false;
      }
    });
    this.setState({items: items.slice(0)})
  }

  checkbox(inItem) {
    let {items} = this.state;
    inItem[SELECTED_KEY] = !inItem[SELECTED_KEY];
    this.setState({items: items.slice(0)})
  }

  toggle(inItem) {
    const {items} = this.state;
    items.forEach((item) => {
      if (item === inItem) {
        item[SELECTED_KEY] = !item[SELECTED_KEY];
      } else {
        item[SELECTED_KEY] = false;
      }
    });
    this.setState({items: items.slice(0)})
  }


  getItems() {
    return Children.map(this.props.children, (elem) => {
      return {...elem.props};
    });
  }

  getChildren() {
    const {items} = this.state;
    return items.map((item, index) => {
      item.onClick = this._onClick.bind(this, item);
      return cloneElement(this.props.children[index], item);
    });
  }

  _onClick(inItem) {
    this[this.props.type](inItem);
  }

  __updateItems(inItems) {
    const {onChange} = this.props;
    const items = inItems.slice(0);
    this.setState({items}, () => {
      onChange(items);
    });
  }

  render() {
    const {className, ...props} = this.props;
    return (
      <div {...props} className={classNames('react-active-items', className)}>
        {this.getChildren()}
      </div>
    );
  }

}
