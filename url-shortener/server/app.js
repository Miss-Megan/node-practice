//import libraries:
const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')


// start the express app:
const app = express()

// include the middleware:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())


// create the routes:
// app.post('/response', routes.postForm)

app.post('', routes.postForm)

app.get('/', (request, response) => {
    return response.status(200).send({
        'OK': 'Success'
    })
})

/*
// Note: We will worry about comments next week:
app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)
*/

app.listen(3000)
