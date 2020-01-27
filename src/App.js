import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    state = {
        formIsValid: false
    }

    isFormValid = (isValid) => {
        this.setState({
            formIsValid: isValid
        });
    }

    render() {
        const { formIsValid } = this.state;
        return (<div>
            <Form isFormValid={this.isFormValid}></Form>
            <Message formIsValid={formIsValid}></Message>
        </div>);
    }
}

export default App;
