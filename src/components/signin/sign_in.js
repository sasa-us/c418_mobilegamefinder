import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {accountSignIn} from "../../actions";
import {renderInputs} from "../../helpers";

class SignIn extends Component {


    handleSignIn (values) {
        console.log("form values", values);
        this.props.accountSignIn(values)
    }
    handleSignUp (values) {
        console.log("form values", values);
        this.props.createAccount(values)
    }

    render() {
        const {handleSubmit} = this.props;
        return (

            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                <h1 className="text-center">Sign-In</h1>
                <div className="row col-xs-6 col-xs-offset-3">
                    <Field className="signInInput" name="email" component={renderInputs} label="Email"/>
            </div>
                <div className="row col-xs-6 col-xs-offset-3">
                    <Field type="password" className="signInInput" name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row col-xs-6 col-xs-offset-3">
                    <div className="signInInput">
                        <button className="btn btn-outline-info btn-sm col-xs-6 col-xs-offset-3">Sign In</button>
                    </div>
                </div>
            </form>
        )
    }
}

function validate(values) {
    const{email, password} = values;
    const errors = {};

    if(!email) {
        errors.email = "Please enter your email";
    }
    if (!password) {
        errors.password = "Please enter a password"
    }
    return errors;

}

SignIn = reduxForm({
    form: "sign-in",
    validate: validate
})(SignIn);

export default connect(null, {accountSignIn: accountSignIn})(SignIn);