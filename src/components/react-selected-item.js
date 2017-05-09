import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createElement} from 'react';
import objectAssign from 'object-assign';

export default class extends React.PureComponent {

  static propTypes = {
    nodeName: PropTypes.string,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    nodeName: 'div',
    selected: false,
  };

  get children() {
    const {nodeName, className, selected, data, ...props} = this.props;
    const cls = classNames('react-selected-item', className);
    const targetProps = objectAssign({
      className: cls,
      'data-selected': selected
    }, props);
    return createElement(nodeName, targetProps);
  }

  render() {
    return this.children;
  }

}

