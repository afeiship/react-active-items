import {ReactSelectedItem, ReactSelectedItems} from '../main';
export default class extends React.PureComponent {
  state = {
    type: 'toggle',
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
        text: 'TEXT3'
      },
      {
        id: 4,
        text: 'TEXT4'
      }
    ]
  };

  _change(inEvent) {
    console.log(inEvent.target.value);
    this.setState({type: inEvent.target.value})
  }

  _change1(inEvent){
    console.log(inEvent.target.value);
  }

  render() {

    return (
      <div className="example-react-selcted-items">
        <select value={this.state.type} onChange={this._change.bind(this)}>
          <option value="toggle">Toggle</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
        </select>

        <div className="blank-20" />

        <ReactSelectedItems onChange={this._change1.bind(this)} type={this.state.type}>
          {
            this.state.items.map((item, key) => {
              return <ReactSelectedItem data={item} key={key} selected={item.selected} className="test-item"
                                        nodeName="div" value={item.id}>{item.text}</ReactSelectedItem>;
            })
          }
        </ReactSelectedItems>
      </div>
    );
  }
}

