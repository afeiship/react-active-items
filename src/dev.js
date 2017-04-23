import './dev.scss';

import SelectedItem from './examples/selected-item';
import SelectedItems from './examples/selected-items';
let id = 100;


class App extends React.Component {

  render() {
    return (
      <div className="hello-react-active-items">
        <h4>Selected-Item</h4>
        <SelectedItem />


        <h4>Selected-Items</h4>
        <SelectedItems />

      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
