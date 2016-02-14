import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {count: 0};
    }

    tick() {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                I'm {this.props.name} Counter.
                Click: {this.state.count}
            </div>
        );
    }
}

export default Counter;
