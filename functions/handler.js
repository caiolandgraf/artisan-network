const server = require('server/index')

exports.handler = (event, context) => {
    server.listen(3000, () => {
        console.log('Express app listening on port 3000')
    })
}
