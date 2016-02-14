import React from 'react';

class Select extends React.Component {
    constructor() {
        super();
        this.state = {selected: 'b'};
    }

    updateSelect() {
        console.log(event);
        this.setState = {selected: event.target.value};
    }

    render() {
        return (
            <select value={this.state.selected} onChange={this.updateSelect.bind(this)}>
                <option value="a">Apple</option>
                <option value="b">Bird</option>
                <option value="c">Cat</option>
            </select>
        );
    }
}

//https://github.com/chrisharrington/demos/blob/gh-pages/react-controls/dropdown.html

export default Select;
