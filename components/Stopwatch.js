Stopwatch = class Stopwatch extends React.PureComponent {
    constructor(props) {
		super(props);

		this.state = this.getDefaultState();
        this.running = false;

		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.step = this.step.bind(this);
	}

	getDefaultState() {
		return {
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
			running: false,
			watch: null
		}
	}

	reset() {
        this.setState({
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		});
	}

	start() {
		if (!this.state.running) {
			this.setState({
				running: true,
				watch: setInterval(this.step, 10)
			});
		}
	}

	step() {
		if (!this.state.running) return;
		this.setState({ times: this.calculate() });
	}

	calculate() {
		let { miliseconds, seconds, minutes } = this.state.times;

		miliseconds += 1;
		if (miliseconds >= 100) {
			seconds += 1;
			miliseconds = 0;
		}

		if (seconds >= 60) {
			minutes += 1;
			seconds = 0;
		}

		return { miliseconds, seconds, minutes };
	}

	stop() {
		this.setState({ running: false });
		clearInterval(this.state.watch);
	}

	render() {
		return (
			<section>
				<StopwatchControls onStart={this.start} onStop={this.stop} />
				<StopwatchDisplay times={this.state.times} />
			</section>
		)
	}
}