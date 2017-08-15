import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor() {
        super();

        this.state = {
            newDate: '',
            birthday: '1982-07-25',
            showStats: false,
        }

        this.changeBirthday = this.changeBirthday.bind(this);
    }


    changeBirthday() {
        console.log(this.state);
        this.setState({
            birthday: this.state.newDate,
            showStats: true,
        })
    }
    render() {
        return (
        <div className="App">
            <h1>Коли Ви народилися?</h1>
            <Form inline>
                <FormControl 
                    onChange={ event => this.setState({newDate: event.target.value })}
                    type="date">
                </FormControl>
                {' '}
                <Button
                    onClick={this.changeBirthday}
                >
                    Надіслати
                </Button>
                {
                    this.state.showStats ?
                    <div className="ageStats">
                        <AgeStats date={this.state.birthday}/>
                    </div>
                        :
                    <div></div>
                }         
            </Form>
        </div>);
    }
}

export default App;


