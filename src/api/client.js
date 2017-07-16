import { curry } from 'ramda';

var getClientDefaults = () =>{
    var headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
 
    return {
        method : 'GET',
        headers: headers,
        mode: 'cors'
    }; 
}

var client = (baseUrl, fetchClient) =>{
    var defaults = getClientDefaults();
 
    var fetchJsonResponse = curry((resource, settings) => fetchClient( `${baseUrl}${resource}`, settings)
        .then(response => {
            if(response.status === 204)
                return [];

            return response.json();
        } )
    );

    var request = curry((settings, resource) => fetchJsonResponse(resource,  { ...defaults, ...settings }));
    var requestWithBody = curry((settings, resource, data) =>   request({ ...settings, ...{body : JSON.stringify(data) } }, resource));
    
    return {
        getRequest: request({method: 'GET'}),
        postRequest: requestWithBody({method: 'POST'}),
        putRequest: requestWithBody({method: 'PUT'}),
        patchRequest: requestWithBody({method: 'PATCH'}),
        deleteRequest: request({method: 'DELETE'})
    }
};

export default client;
export { client };
