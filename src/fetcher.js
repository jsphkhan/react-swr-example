const fetcher = (...args) => fetch(...args).then(async (res) => {
    //add a custom delay
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
    return res.json()
});
export default fetcher;