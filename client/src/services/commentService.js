const baseUrl = 'http://localhost:3030/jsonstore/comments';


export const create = async (gameID, username, text) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({gameID, username, text})
    });

    const result = await response.json();
    return result
};

export const getAll = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const result = await response.json();
    return Object.values(result);
};