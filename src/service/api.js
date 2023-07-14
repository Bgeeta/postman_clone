import axios from 'axios';

import {  getHeadersAndParams } from '../utils/common-util';

export const getData = async (formData, jsonText, paramData, headerData) => {
    console.log(formData.type.toLowerCase())
    const apiType = formData.type.toLowerCase(); 
    const apiUrl = formData.url;
    const apiHeaders = getHeadersAndParams(headerData);
    const apiParams = getHeadersAndParams(paramData);
    const req = {
        method: apiType,
        url: apiUrl,
        body: jsonText,
        headers: apiHeaders,
        params: apiParams
    }
console.log(req.method, typeof(req.body));
    try {
        if(apiType === 'post'){
            return await axios.post(apiUrl, JSON.parse(req.body));

        }else if(apiType === 'put'){
            return await axios.put(apiUrl, JSON.parse(req.body));
        }
        else{
            return await axios(req);
        }
    } catch (error) {
        console.log('Error while getting the response ', error);
        return 'error';
    }
}