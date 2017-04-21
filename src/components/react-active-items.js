import './style.scss';
import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

const CHECKED_KEY = 'checked';

export default class ReactActiveItems extends PureComponent{
  static CHECKED_KEY = CHECKED_KEY;
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
      item[CHECKED_KEY] = value.indexOf(item[valueKey])>-1;
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
      if(item[CHECKED_KEY]){
        value.push(item[valueKey]);
      }
    });
    return value;
  }

  getChildren(){
    const {children} = this.props;
    const {items} = this.state;
    return items.map((item,index)=>{
      const isActive = item[CHECKED_KEY];
      return React.cloneElement(children, Object.assign({
        key:index,
        onClick:this._onClick.bind(this,item),
        'data-checked':item[CHECKED_KEY]
      },item));
    });
  }

  multipleProcessor(inItem){
    const {items} = this.state;
    inItem[CHECKED_KEY] = !inItem[CHECKED_KEY];
    this.updateState(items);
  }

  singleProcessor(inItem){
    const {items} = this.state;
    items.forEach((item)=>{
      item[CHECKED_KEY] = false;
    });
    inItem[CHECKED_KEY] = true;
    this.updateState(items);
  }

  toggleProcessor(inItem){
    const {items} = this.state;
    items.forEach((item)=>{
      if(item === inItem){
        item[CHECKED_KEY] = !item[CHECKED_KEY];
      }else{
        item[CHECKED_KEY] = false;
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
