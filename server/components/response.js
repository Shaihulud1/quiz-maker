module.exports.json = (res, status, content) => {
    res.status(status)
    res.json(content)
}