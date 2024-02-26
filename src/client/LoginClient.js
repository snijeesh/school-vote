class LoginClient {
    
    async login(userName, password) {
        let data = await this.callLoginApi(userName, password);

        var currentUser = data.login;
        if(currentUser) {
            return {name: currentUser.firstName + ' ' + currentUser.lastName, role: currentUser.role, token: currentUser.token, home: currentUser.home};
        }
    
        return {};
    }

    async callLoginApi(userName, password) {
        const LOGIN_QUERY = `
            query LoginQuery ($userName: String!, $password: String!) {
                login(userName: $userName, password: $password) {
                    firstName
                    lastName
                    role
                    token
                    home
                }
            }
        `;
        let data = await fetch('http://localhost:8080/graphql', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: LOGIN_QUERY,
                variables: { userName, password }
            }),
        })
        .then(response => {
            return response.json().then(data => {
                return data.data;
            })
            .catch(error => {
                console.log(error);
            });
        });

        return data;
    }

    async registerUser(user) {
        
        const REGISTER_QUERY = `
        mutation RegisterMutation ($userInput: UserInput!) {
            register(userInput: $userInput)
        }
        `;
        let data = await fetch('http://localhost:8080/graphql', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: REGISTER_QUERY,
                variables: { userInput: { 
                        firstName: user.firstName, 
                        lastName: user.lastName, 
                        email: user.email,
                        password: user.password 
                    }
                }
            }),
        })
        .then(response => {
            return response.json().then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
        });

        return data;
    }
}

export default LoginClient;