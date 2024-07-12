const baseUrl = 'http://localhost:3030/jsonstore';



export const getAll = async () => {
    const response = await fetch(`${baseUrl}/games`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    });

    const result = await response.json();
    return Object.values(result);
};

export const create = async (gameData) => {
    const response = await fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();
    return result
}