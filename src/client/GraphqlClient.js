import React, { Component } from 'react';
//import {gql, useQuery} from '@apollo/client';

// const query = gql`{
//     login
// }`;

class GraphqlClient {
    
    login(userName, password) {
        const users = [{userName: 'admin', password: 'password'}];
        var currentUser = users.find((user) => user.userName === userName && user.password === password);

        if(currentUser) {
            return 'token';
        }
    }
    validateUser() {
        console.log('validateUser');
        return "testuser";
    }
}

export default GraphqlClient;