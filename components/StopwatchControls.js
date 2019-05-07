StopwatchControls = class StopwatchControls extends React.PureComponent {
	render() {
		return (
			<nav className="controls">
				<StopwatchButton onClick={this.props.onStart}>Start</StopwatchButton>
				<StopwatchButton onClick={this.props.onStop}>Stop</StopwatchButton>
			</nav>
		);
	}
}