class GraphqlClient {
    
    login(userName, password) {
        this.callLoginApi().then(data => {
            console.log('data: ' + data.login);
            
            var currentUser = data.login.find((user) => user.userName === userName && user.password === password);
            console.log(currentUser);

            if(currentUser) {
                return {name: currentUser.name, role: currentUser.role, token: currentUser.token};
            }
    
            return {}
        });
        
        
        // const users = [
        //     {userName: 'admin', password: 'password', name: 'Admin', role: 'admin', token: 'testtoken'},
        //     {userName: 'user', password: 'password', name: 'User', role: 'user', token: 'testtoken'}
        // ];
        // var currentUser = users.find((user) => user.userName === userName && user.password === password);
        // console.log(currentUser);
        // if(currentUser) {
        //     return {name: currentUser.name, role: currentUser.role, token: currentUser.token};
        // }

        // return {}
    }

    validateUser() {
        console.log('validateUser');
        return "testuser";
    }

    callLoginApi(callback) {
        console.log('login started');
        return fetch('http://localhost:8080/graphql', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                query LoginQuery{
                    login {
                        userName
                        password
                    }
                }
                `,
            }),
        })
        .then((response => response.json()))
        .then(data => {
            console.log(data.data);
            return data.data;
        });
    }
}

export default GraphqlClient;