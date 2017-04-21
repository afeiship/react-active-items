import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

const SELECTED_KEY = 'selected';

export default class ReactActiveItems extends PureComponent{
  static SELECTED_KEY = SELECTED_KEY;
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
    disabled:PropTypes.bool,
    valueKey:PropTypes.string,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    type:'single',
    items:[],
    value:[],
    disabled:false,
    valueKey:'value',
    onChange:noop
  };

  static getDefaultState(inProps){
    let {items, value, valueKey, disabled, type} = inProps;
    items.forEach((item)=>{
      item[SELECTED_KEY] = value.indexOf(item[valueKey])>-1;
    });
    return { items, value, disabled };
  }


  constructor(props) {
    super(props);
    this.state = {
      disabled:props.disabled,
      ...ReactActiveItems.getDefaultState(props)
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.state){
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
      if(item[SELECTED_KEY]){
        value.push(item[valueKey]);
      }
    });
    return value;
  }

  getChildren(){
    const {children} = this.props;
    const {items} = this.state;
    return items.map((item,index)=>{
      const isActive = item[SELECTED_KEY];
      return React.cloneElement(children, Object.assign({
        key:index,
        onClick:this._onClick.bind(this,item),
        'data-selected':item[SELECTED_KEY]
      },item));
    });
  }

  multipleProcessor(inItem){
    const {items} = this.state;
    inItem[SELECTED_KEY] = !inItem[SELECTED_KEY];
    this.updateState(items);
  }

  singleProcessor(inItem){
    const {items} = this.state;
    items.forEach((item)=>{
      item[SELECTED_KEY] = false;
    });
    inItem[SELECTED_KEY] = true;
    this.updateState(items);
  }

  toggleProcessor(inItem){
    const {items} = this.state;
    items.forEach((item)=>{
      if(item === inItem){
        item[SELECTED_KEY] = !item[SELECTED_KEY];
      }else{
        item[SELECTED_KEY] = false;
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
    const {multiple,onChange,type,disabled} = this.props;
    !disabled && this[`${type}Processor`](inItem);
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
