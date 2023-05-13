import axios from 'axios'
import Token from '../auth/token';
import { restAPI } from '../rest/request';



export const s3PostUrl = (file, prefix = "") => {
    console.log(file)
    return restAPI.post("/s3/preSignedUrl", {
        name: prefix + file.name,
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

