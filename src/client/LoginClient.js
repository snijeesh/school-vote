class LoginClient {
    
    async login(userName, password) {
        let data = await this.callLoginApi();

        var currentUser = data.login.find((user) => user.userName === userName && user.password === password);
        if(currentUser) {
            return {name: currentUser.name, role: currentUser.role, token: currentUser.token, home: currentUser.home};
        }
    
        return {};
    }

    async callLoginApi() {
        
        let data = await fetch('http://localhost:8080/graphql', {
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
                        name
                        role
                        token
                        home
                    }
                }
                `,
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
}

export default LoginClient;