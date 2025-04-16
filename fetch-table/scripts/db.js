const serverUrl = 'https://nettuts.hu/jms/Guszej/';

export const getAll = async (entity = 'products') => {
    return fetch(`${serverUrl}${entity}`).then(response => response.json());
};

export const remove = (id = 0, entity = 'products') => {
    return fetch(`${serverUrl}${entity}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json());
};