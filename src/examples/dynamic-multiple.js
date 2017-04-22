import ReactSelectedItems from '../main';
import Test1Item from './test1-item';

let id = 100;
export default class extends React.PureComponent {
  state = {
    disabled: false,
    items: [
      {
        value: 1,
        text: 'dynamic--multiple-abc'
      },
      {
        value: 2,
        text: 'dynamic--bcd'
      },
      {
        value: 3,
        text: 'dynamic--AAA'
      },
      {
        value: 4,
        text: 'dynamic--BBB'
      },
      {
        value: 5,
        text: 'dynamic--CCC'
      }
    ]
  };

  _change(inEvent) {
    const value = inEvent.target.value;
    if (value.length > 3) {
      this.setState({disabled: true});
    }
  }

  _click1() {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  _click2() {
    let {items} = this.state;
    items.push({
      value: id++,
      text: 'PUSH_Dynamic'
    });
    this.setState({items: items.slice(0)});
  }

  _click3() {
    console.log(this);
  }

  render() {
    return (
      <div className="dy-example">
        <button onClick={this._click1.bind(this)}>Toggle disabled ->{String(this.state.disabled)}</button>
        <button onClick={this._click2.bind(this)}>Append items ->{String(this.state.items.length)}</button>
        <ReactSelectedItems defaultValue={[2, 3]} disabled={this.state.disabled} items={this.state.items}
                            type='multiple'
                            onChange={this._change.bind(this)}>
          <Test1Item />
        </ReactSelectedItems>
      </div>
    );
  }
}
