import React, { Component } from 'react';
//import {gql, useQuery} from '@apollo/client';

// const query = gql`{
//     login
// }`;

class GraphqlClient {
    
    login(userName, password) {
        const users = [
            {userName: 'admin', password: 'password', name: 'Admin', role: 'admin', token: 'testtoken'},
            {userName: 'user', password: 'password', name: 'User', role: 'user', token: 'testtoken'}
        ];
        var currentUser = users.find((user) => user.userName === userName && user.password === password);

        if(currentUser) {
            return {name: currentUser.name, role: currentUser.role, token: currentUser.token};
        }

        return {}
    }
    validateUser() {
        console.log('validateUser');
        return "testuser";
    }
}

export default GraphqlClient;