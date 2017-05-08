import React, {Children, PureComponent} from 'react';
import {cloneElement, createElement} from 'react';

import PropTypes from 'prop-types';
import {SELECTED_KEY} from './const';
import classNames from 'classnames';
import noop from 'noop';

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
      items: this.getItems(props)
    };
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
    this.__updateItems(items);
  }

  checkbox(inItem) {
    let {items} = this.state;
    inItem[SELECTED_KEY] = !inItem[SELECTED_KEY];
    this.__updateItems(items);
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
    this.__updateItems(items);
  }


  getItems(inProps) {
    return Children.map(inProps.children, (elem) => {
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

  __getData(inItems) {
    return inItems.map((item) => {
      return Object.assign(item.data, {
        [SELECTED_KEY]: item[SELECTED_KEY]
      });
    });
  }

  __updateItems(inItems) {
    const {onChange} = this.props;
    const items = inItems.slice(0);
    this.setState({items}, () => {
      onChange({target: {value: this.__getData(items)}});
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
