import request from './request'

export default async function getMovies(page = 1, size = 10, appkey='demo13_1545210570249') {
    let resp = await request.get("/api/student/findByPage", {
        params: {
            appkey,
            page,
            size
        }
    })
    return resp.data
}