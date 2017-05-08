import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createElement} from 'react';

export default class extends React.PureComponent {

  static propTypes = {
    nodeName: PropTypes.string,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    nodeName: 'div',
    selected: false,
  };

  constructor(props){
    super(props);
    this.state = {
      selected:props.selected,
      disabled:props.disabled
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps !== this.props) {
      this.setState(nextProps);
    }
  }

  get children() {
    const {nodeName, className, selected, data, ...props} = this.props;
    const cls = classNames('react-selected-item', className);
    const targetProps = Object.assign({
      className: cls,
      disabled:this.state.disabled,
      'data-selected': this.state.selected
    }, props);
    return createElement(nodeName, targetProps);
  }

  render() {
    return this.children;
  }

}

