import './dev.scss';
import Single from './examples/single';
import Multiple from './examples/multiple';
import Toggle from './examples/toggle';
import DynamicMultiple from './examples/dynamic-multiple';
let id = 100;


class App extends React.Component {
  render() {
    console.log('re render...');
    return (
      <div className="hello-react-active-items">
        <h4>Single Active Item</h4>
        <Single />

        <h4>Multiple Active Item</h4>
        <Multiple />

        <h4>Toggle Active Item</h4>
        <Toggle />


        <h4>Dynamic-multiple Active Item</h4>
        <DynamicMultiple />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
