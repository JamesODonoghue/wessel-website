import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Formik, Field, Form } from 'formik';
import { withFirebase } from '../Firebase';
const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

interface IState {
    username: string,
    email: string,
    passwordOne: string
    passwordTwo: string,
    error?: {
        message: string
    }
}

interface IProps {
    firebase?: any
}

const INITIAL_STATE: IState = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class SignUpFormBase extends Component<any, any> {
    constructor(props: IProps) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }
    onChange = (event: Event) => {
        const target = event.target as HTMLFormElement;
        this.setState({ [target.name]: target.value });
    }

    onSubmit = (e: Event) => {
        const { username, email, passwordOne } = this.state as IState;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser: string) => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch((error: IState['error']) => {
                this.setState({ error });
            });
        e.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state as IState;
        return (
            <Formik
                initialValues={{
                    username,
                    email,
                    passwordOne,
                    passwordTwo
                }}
                onSubmit={values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
                render={() => (
                    <Form className="form-container">
                        <label htmlFor="username">User Name </label>
                        <Field name="username" placeholder="jane123" type="username" />
                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="jane@acme.com" type="email" />
                        <label htmlFor="passwordOne">Password</label>
                        <Field name="passwordOne" type="password" />
                        <label htmlFor="passwordTwo">Confirm Password</label>
                        <Field name="passwordTwo" type="password" />
                        <button type="submit">Submit</button>

                        {error && <p>{error.message}</p>}
                    </Form>
                )}
            />);
    }
}
const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withFirebase(SignUpFormBase)

export default SignUpPage
export { SignUpForm, SignUpLink };