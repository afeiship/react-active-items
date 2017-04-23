import {createElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class extends React.PureComponent {

  static propTypes = {
    nodeName: PropTypes.string,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    nodeName: 'div',
    selected: false,
  };

  getChildren() {
    const {nodeName, className, selected, ...props} = this.props;
    const cls = classNames('react-selected-item', className);
    const targetProps = Object.assign({
      className: cls,
      'data-selected': selected
    }, props);
    return createElement(nodeName, targetProps);
  }

  render() {
    return this.getChildren();
  }

}

