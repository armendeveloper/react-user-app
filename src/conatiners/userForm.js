import React from 'react';

class UserForm extends  React.Component {
    state = {
        firstName: this.props.user? this.props.user.firstName: "",
        age: this.props.user? this.props.user.age: 0,
        lastName : this.props.user? this.props.user.lastName: "",
    };

    setFirstName = (event) => {
        this.setState({"firstName": event.target.value});
    };

    setLastName = (event) => {
        this.setState({"lastName": event.target.value});
    };

    setAge = (event) => {
        this.setState({"age": event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            ...this.state
        })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="user-form">
                <div className="label">
                    <label htmlFor="firstName"> First Name</label>
                    <input id="firstName" type="text" value={this.state.firstName} onChange={this.setFirstName} />
                </div>
                <div className="label">
                    <label htmlFor="lastName"> Last Name</label>
                    <input id="lastName" type="text" value={this.state.lastName}  onChange={this.setLastName}/>
                </div>
                <div className="label">
                    <label htmlFor="age"> Age</label>
                    <input id="age" type="number" value={this.state.age} onChange={this.setAge} />
                </div>
                <button className="button" type="submit">Save</button>
            </form>
        )
    }
}

export default UserForm;