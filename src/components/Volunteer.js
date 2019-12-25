import React from 'react';
export default class VolunteerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target }) {
        let { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <form className="volunteer-form" onSubmit={this.handleSubmit}>
                <div className="volunteer-form__header">
                    <h2>Volunteer Signup</h2>
                </div>
                <div className="form-input__container">
                    <label>First Name</label>
                    <input name="firstName" onChange={this.handleChange}></input>
                </div>
                <div className="form-input__container">
                    <label>Last Name</label>
                    <input name="lastName" onChange={this.handleChange}></input>
                </div>
                <div className="form-input__container">
                    <label>Email</label>
                    <input name="email" onChange={this.handleChange}></input>
                </div>
                <div className="form-input__container">
                    <label>Phone</label>
                    <input name="phone" onChange={this.handleChange}></input>
                </div>
                <div className="send-button">
                    <button type="submit"> Send </button>
                </div>
            </form>
        )
    }
}
