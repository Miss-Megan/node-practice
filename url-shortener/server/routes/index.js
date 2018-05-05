const database = []

module.exports = {
        postForm(req, res) {
        database.push(req.body)


        res.status(200).send({
          message : `Success! Your URL has been created: ${req.body.shortURL}`,
        })
        console.log(database)
      }
}
