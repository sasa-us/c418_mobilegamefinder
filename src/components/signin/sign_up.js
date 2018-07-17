import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {createAccount} from "../../actions";
import {renderInputs} from "../../helpers";

class SignUp extends Component {


    handleSignUp (values) {
        console.log("form values", values);
        this.props.createAccount(values)
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                <h1 className="text-center">Create Account</h1>
                <div className="row">
                    <Field className="col-6 offset-3" name="username" component={renderInputs} label="User Name"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3" name="email" component={renderInputs} label="Email"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3" name="password" component={renderInputs} label="Password"/>
                </div>
                <div className="row">
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-info btn-sm">Sign Up</button>
                    </div>
                </div>
            </form>
        )
    }
}