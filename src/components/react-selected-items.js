import React, {Children, PureComponent} from 'react';
import {cloneElement, createElement} from 'react';

import PropTypes from 'prop-types';
import {SELECTED_KEY} from './const';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['toggle', 'radio', 'checkbox','other']),
  };

  static defaultProps = {
    value: [],
    onChange: noop,
    type: 'toggle',
  };

  constructor(props) {
    super(props);
    this.state = {
      items: this.getItems(props)
    };
  }

  get children() {
    const {items} = this.state;
    return items.map((item, index) => {
      item.onClick = this._onClick.bind(this, item);
      return cloneElement(this.props.children[index], item);
    });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps!==this.props){
      this.setState({
        items:this.getItems(nextProps)
      });
    }
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
    this.__updateItems(inItem, items);
  }

  checkbox(inItem) {
    let {items} = this.state;
    inItem[SELECTED_KEY] = !inItem[SELECTED_KEY];
    this.__updateItems(inItem, items);
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
    this.__updateItems(inItem, items);
  }

  other(inItem){
    const {items} = this.state;
    this.__updateItems(inItem, items);
  }


  getItems(inProps) {
    return Children.map(inProps.children, (elem) => {
      return {...elem.props};
    });
  }

  _onClick(inItem) {
    this[this.props.type](inItem);
  }

  __getData(inItems) {
    return inItems.map((item) => {
      return objectAssign(item.data, {
        [SELECTED_KEY]: item[SELECTED_KEY]
      });
    });
  }

  __updateItems(inItem, inItems) {
    const {onChange} = this.props;
    const items = inItems.slice(0);

    this.setState({items}, () => {
      onChange({
        target: {
          active: inItem.data,
          value: this.__getData(items)
        }
      });
    });
  }

  render() {
    const {className, ...props} = this.props;
    return (
      <div {...props} className={classNames('react-active-items', className)}>
        {this.children}
      </div>
    );
  }

}
