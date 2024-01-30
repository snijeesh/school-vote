import React, { Component } from 'react';
//import {gql, useQuery} from '@apollo/client';

// const query = gql`{
//     login
// }`;

class GraphqlClient extends Component {

    static login(){
        console.log('login');
        //const { loading, error, data } = useQuery(query);
        // if (loading) return 'Loading';
        // if (error) return `Error ${error.message}`;
    }
}

export default GraphqlClient;