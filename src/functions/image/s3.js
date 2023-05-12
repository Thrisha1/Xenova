import axios from 'axios'
import Token from '../auth/token';
import { restAPI } from '../rest/request';



export const s3PostUrl = (file) => {

    return restAPI.post("/s3/preSignedUrl", {
        name: file.name,
        type: file.type
    }
    )

    //.then(res => console.log(res)).catch(e => console.log(e))
}

export const s3GetUrl = ({ key }) => {
    return restAPI.get(`/s3/preSignedUrl/${key}`).then(res =>
        res.data.url
    ).catch(e => console.log(e))
}



const uploadToBucket = async (file, url, fields) => {

    const form = new FormData();
    Object.entries(fields).forEach(([field, value]) => {
        form.append(field, value);
    });

    form.append("file", file)

    try {
        let res = await restAPI.post(url, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: form
        })

        return res;
    }
    catch (error) {
        throw new Error(error)
    }
}

