const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

let store = {
    posts: [{
        name: 'What is going on right now in this EdX course?',
        url: 'https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/course/',
        text: 'As we have already discussed, this course is a little advanced and some of the language and concepts are glossed over because the teacher already assumes basic fluency with server-side programming. That is OK. You will still learn a ton, even if you don\'t understand everything. You are learning to use developer documentation and resources, and we will go over the jargon and concepts in class.',
        comments: [{
                text: 'So many assumptions are being made about what we already know?! This is overwhelming!'
            }, {
                text: 'This is great! At the end of this unit, we\'re going to be able to make our own API.'
            }, {
                text: 'How do we make this live? On a real server?!!'
        }]
    },{
      name: 'Bacon Ipsum Yum',
      imageURL: "https://i.pinimg.com/originals/52/72/3b/52723b36ec518985c08660e33e2ad92a.jpg",
      url: 'https://baconipsum.com/?paras=2&type=all-meat&start-with-lorem=1',

      text: "Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!Bacon ipsum dolor amet cow turkey tri-tip spare ribs ball tip kevin. Leberkas pork strip steak corned beef fatback ham hock, picanha cow jowl ball tip swine rump. Fatback tenderloin prosciutto pork chop ribeye beef ribs. Boudin buffalo biltong salami pastrami short ribs, porchetta ribeye chicken t-bone chuck.\n\nPork chop pig porchetta bresaola, t-bone hamburger capicola meatloaf ground round short loin sausage fatback prosciutto frankfurter. Rump frankfurter ham hock, prosciutto andouille filet mignon beef. Sirloin pork kielbasa prosciutto ball tip. Andouille ground round alcatra, pork chop leberkas boudin pancetta kevin biltong. Ground round t-bone venison filet mignon, pancetta rump drumstick beef turducken jowl ball tip prosciutto. Ham hock ball tip bresaola sausage jerky bacon andouille shoulder. Corned beef meatball flank tail beef t-bone."
     },{
       name: "Pretty sweet, right?",
       imageURL: "http://miam-images.m.i.pic.centerblog.net/0189d378.jpg",
       url: "http://www.cupcakeipsum.com",
       text: "Cupcake ipsum dolor sit amet lollipop. Chocolate bar danish pastry dessert icing danish ice cream marzipan. Bear claw gingerbread sugar plum donut. Tootsie roll caramels wafer.\n\nTopping cotton candy toffee chocolate. Cake muffin tiramisu cookie sugar plum. Cupcake oat cake candy pie liquorice jelly danish fruitcake pastry. Candy soufflé halvah pie danish.\n\nJujubes sesame snaps liquorice gingerbread marshmallow. Gummies ice cream halvah powder sweet jelly-o. Toffee macaroon croissant. Caramels bear claw bear claw soufflé lemon drops toffee.\n\nCroissant dessert tiramisu wafer gummi bears bonbon apple pie halvah topping. Chupa chups macaroon macaroon cupcake pie soufflé bonbon topping. Marzipan gummies macaroon cotton candy pastry oat cake. Candy canes cake sweet roll jelly-o."
      },{
        name: "Pirate Ipsum",
        imageURL: "https://s.rozali.com/p/p/r/prase-moda-jivotno-27322-500x334.jpg",
        url: "https://pirateipsum.me",
        text: "The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!\n\nKeel landlubber or just lubber execution dock poop deck chantey swab spirits Barbary Coast draft aft. Parrel broadside to go on account flogging brig piracy grog blossom killick heave down overhaul. Ho Yellow Jack knave provost swing the lead lanyard Letter of Marque yardarm chandler man-of-war.\n\nGaff pirate bilge water gally jolly boat ye Barbary Coast aye American Main flogging. Scurvy knave fluke snow Jack Tar jib starboard Jack Ketch ballast driver. Plate Fleet tack bucko Letter of Marque schooner coxswain rigging Brethren of the Coast keelhaul topsail."
      }]

}


let app = express()

// Middleware: Does stuff to the request and response objects
// before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())
app.use((req, res, next) => {
  //before routing the request, attach the store ofject to the response.
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.get('/posts/:postId', routes.posts.getPost)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

/*
// NOTE: We will worry about comments next week:
app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)
*/

app.listen(3000)
