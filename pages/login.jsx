import React, { Component } from 'react';
import apollo from '../services/apollo';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';


const SIGN = gql`
    mutation getLogin($email: String!, $pass: String!) {
        login(email: $email, password: $pass)
    }
`;


const signIn = () => {
    const [addLogin, { loading, data, error }] = useMutation(SIGN);
    let email;
    let pass;

    return (
        <div>
            <form
                onSubmit={async e => {
                    e.preventDefault();
                    const result =  addLogin({ variables: { email: email.value, pass: pass.value } });
                }}
            >
                <input
                    ref={node => {
                        email = node;
                    }}
                />
                <input
                    type="password"
                    ref={node => {
                        pass = node;
                    }}
                />
                <button type="submit">Login</button>

                {loading ? 'Cargando...' : ''}

                { error ? error.message : '' }

                { data ? data.login : '' }

            </form> 
        </div>
    )
}



export default apollo.auth(signIn)