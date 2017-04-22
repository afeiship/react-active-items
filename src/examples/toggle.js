import ReactSelectedItems from '../main';
import Test1Item from './test1-item';


export default class extends React.PureComponent {
  state = {
    items: [
      {
        value: 1,
        text: 'abc'
      },
      {
        value: 2,
        text: 'bcd'
      },
      {
        value: 3,
        text: 'AAA'
      }
    ]
  };

  _change(inEvent) {
    console.log(inEvent.target.value);
  }

  render() {
    return (
      <ReactSelectedItems value={[3]} items={this.state.items} type='toggle'
                          onChange={this._change.bind(this)}>
        <Test1Item />
      </ReactSelectedItems>
    );
  }
}

