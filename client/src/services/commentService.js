const baseUrl = 'http://localhost:3030/data/comments';


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

export const getAll = async (gameID) => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const result = await response.json();
    return result.filter(comments => comments.gameID === gameID);
};