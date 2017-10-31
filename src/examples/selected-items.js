import {ReactSelectedItem, ReactSelectedItems} from '../main';
export default class extends React.PureComponent {
  state = {
    type: 'toggle',
    selectedItem:{},
    items: [
      {
        id: 1,
        text: 'TEXT1',
        selected: true
      },
      {
        id: 2,
        text: 'TEXT2'
      },
      {
        id: 3,
        disabled:true,
        text: 'TEXT3'
      },
      {
        id: 4,
        text: 'TEXT4'
      }
    ]
  };

  _change(inEvent) {
    this.setState({type:inEvent.target.value})
    // this.setState({itetypems: inEvent.target.value.slice(0)})
  }

  _change1(inEvent){
    console.log('other？');
    this.setState({items: inEvent.target.value.slice(0)})
    // console.log(inEvent.target.value);
    // const item = inEvent.target.value.filter(item=>item.selected);
    // console.log(item);
    // this.setState({selectedItem:item[0]});
  }

  render() {
    return (
      <div className="example-react-selcted-items">
        <select value={this.state.type} onChange={this._change.bind(this)}>
          <option value="toggle">Toggle</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
          <option value="other">Other</option>
        </select>

        <div className="blank-20" />

        <ReactSelectedItems onChange={this._change1.bind(this)} type={this.state.type}>
          {
            this.state.items.map((item, key) => {
              return <ReactSelectedItem data={item} disabled={item.disabled} key={key} selected={item.selected} className="test-item"
                                        value={item.id}>{item.text} => {String(!!item.selected)}</ReactSelectedItem>;
            })
          }
        </ReactSelectedItems>
      </div>
    );
  }
}

