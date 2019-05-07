StopwatchDisplay = class StopwatchDisplay extends React.PureComponent {
	format(times) {
        return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
	}

	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}

	render() {
		return <div className="stopwatch">{this.format(this.props.times)}</div>;
	}
}