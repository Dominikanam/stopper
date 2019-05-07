StopwatchButton = class StopwatchButton extends React.PureComponent {
	render() {
		return <button className="button" onClick={this.props.onClick}>{this.props.children}</button>;
	}
}