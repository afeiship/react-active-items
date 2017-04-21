import './style.scss';
import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

const ACTIVE_KEY = '__active__';

export default class ReactActiveItems extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    type:PropTypes.oneOf([
      'single',
      'multiple',
      'toggle',
      'other'
    ]),
    items:PropTypes.array,
    value:PropTypes.array,
    valueKey:PropTypes.string,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    type:'single',
    items:[],
    value:[],
    valueKey:'value',
    onChange:noop
  };

  static getDefaultState(inProps){
    let {items, value, valueKey, multiple} = inProps;
    items.forEach((item)=>{
      item[ACTIVE_KEY] = value.indexOf(item[valueKey])>-1;
    });
    return { items, value };
  }


  constructor(props) {
    super(props);
    this.state = ReactActiveItems.getDefaultState(props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value !== this.state.value || nextProps.items !== this.state.items){
      this.setState(
        ReactActiveItems.getDefaultState(nextProps)
      );
    }
  }

  getValues(){
    const {valueKey} = this.props;
    const {items} = this.state;
    let value = [];
    items.forEach((item)=>{
      if(item[ACTIVE_KEY]){
        value.push(item[valueKey]);
      }
    });
    return value;
  }

  getChildren(){
    //todo: __active__ Can NOT delelte, but CAN NOT use [ACTIVE_KEY] instead.
    const {children} = this.props;
    const {items} = this.state;
    return items.map((item,index)=>{
      const isActive = item[ACTIVE_KEY];
      const {__active__,...itemProps} = item;
      return React.cloneElement(children, Object.assign({
        key:index,
        onClick:this._onClick.bind(this,item),
        'data-active':isActive
      },itemProps));
    });
  }

  multipleProcessor(inItem){
    const {items} = this.state;
    inItem[ACTIVE_KEY] = !inItem[ACTIVE_KEY];
    this.updateState(items);
  }

  singleProcessor(inItem){
    const {items} = this.state;
    items.forEach((item)=>{
      item[ACTIVE_KEY] = false;
    });
    inItem[ACTIVE_KEY] = true;
    this.updateState(items);
  }

  toggleProcessor(inItem){
    const {items} = this.state;
    items.forEach((item)=>{
      if(item === inItem){
        item[ACTIVE_KEY] = !item[ACTIVE_KEY];
      }else{
        item[ACTIVE_KEY] = false;
      }
    });
    this.updateState(items);
  }

  otherProcessor(inItem){
    const {onChange} = this.props;
    onChange(inItem,this);
  }

  updateState(inItems){
    const {onChange}  = this.props;
    this.setState({items:inItems.slice(0)},()=>{
      const value = this.getValues();
      onChange({
        target:{value}
      });
    });
  }

  _onClick (inItem){
    const {multiple,onChange,type} = this.props;
    this[`${type}Processor`](inItem);
  }

  render(){
    const {className,type,items,value,valueKey,onChange,...props} = this.props;
    return (
      <div {...props} className={classNames('react-active-items',className)}>
        {this.getChildren()}
      </div>
    );
  }
}
