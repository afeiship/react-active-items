import ReactSelectedItems from '../main';
import Test1Item from './test1-item';


export default class extends React.PureComponent {
  state = {
    items: [
      {
        value: 1,
        text: 'multiple-abc'
      },
      {
        value: 2,
        text: 'multiple-bcd'
      },
      {
        value: 3,
        text: 'multiple-AAA'
      },
      {
        value: 4,
        text: 'multiple-BBB'
      },
      {
        value: 5,
        text: 'multiple-CCC'
      }
    ]
  };

  _change(inEvent) {
    console.log(inEvent.target.value);
  }

  render() {
    return (
      <ReactSelectedItems value={[1, 5]} items={this.state.items} type='multiple'
                          onChange={this._change.bind(this)}>
        <Test1Item />
      </ReactSelectedItems>
    );
  }
}

