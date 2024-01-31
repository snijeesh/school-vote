import React, { Component } from 'react';
//import {gql, useQuery} from '@apollo/client';

// const query = gql`{
//     login
// }`;

class GraphqlClient {
    
    validateUser() {
        console.log('validateUser');
        return "testuser";
    }
}

export default GraphqlClient;