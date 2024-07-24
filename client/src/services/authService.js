const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const token = localStorage.getItem('accessToken')

    if(token) {
        response.headers = {
            ...response.headers,
            'X-Authorization': token
        }
    }

    const result = await response.json();
    return result;
};
export const register = async (email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const token = localStorage.getItem('accessToken')

    if(token) {
        response.headers = {
            ...response.headers,
            'X-Authorization': token
        }
    }

    const result = await response.json();
    return result
};


export const logout = async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        throw new Error('No access token found');
    }

    const response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    });

    if (response.status === 204) {
        return {}; // No content
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};
