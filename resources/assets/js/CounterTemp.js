import React from 'react';

class CounterTemp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }
    tick() {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}
CounterTemp.propTypes = { initialCount: React.PropTypes.number };
CounterTemp.defaultProps = { initialCount: 0 };

export default CounterTemp;