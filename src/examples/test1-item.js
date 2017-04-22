export default class Test1Item extends React.Component {
  render() {
    const {value, text, selected, disabled, ...props} = this.props;
    console.log(this.props.disabled);
    return (
      <button disabled={disabled} {...props} data-act="adsfsdf" data-test="KJJ" data-kk={`kk-${selected}`}
              className="test-item">{value}={text}</button>
    );
  }
}
