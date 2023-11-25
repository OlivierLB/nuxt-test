export default defineEventHandler(async (event) => {
    const body =  await readBody(event)
    return {
        isConnect: body.email === body.password
    }
});