import React from 'react';
import Counter from './Counter';
import CounterTemp from './CounterTemp';
import Select from './Select';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        Main Content
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <Select />
                    </div>
                </div>

            </div>
        );
    }
}
export default Main;
