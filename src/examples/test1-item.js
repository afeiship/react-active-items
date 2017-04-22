export default class Test1Item extends React.Component {
  render() {
    const {value, text, selected, ...props} = this.props;
    return (
      <button {...props} data-kk={`kk-${selected}`} className="test-item">{value}={text}</button>
    );
  }
}
