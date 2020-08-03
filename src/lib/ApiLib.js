import {ROUTES} from "../config";

const get = async (url) => {
    return await fetch(ROUTES[url])
        .then(async (res) => {
            const response = await res.json();
            return response;
        })
        .catch((err) => {
            throw new Error(err);
        });
};


export const post = async (
    url,
    body = {},
    headers = {"Content-Type": "application/json"}) => {

    return await fetch(ROUTES[url], {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
        .then(async (res) => {
            const response = await res.json();
            return response;
        })
        .catch((err) => {
            throw new Error(err);
        });
};


export const ApiLib = {
    get,
    post,
};
