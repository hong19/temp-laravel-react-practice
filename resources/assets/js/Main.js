import React from 'react';
import Counter from './Counter';
import CounterTemp from './CounterTemp';

class Main extends React.Component {
    render() {
        return (
            <div>
                Main Content
                <Counter name="Hong"/>
                <CounterTemp />
            </div>
        );
    }
}
export default Main;
