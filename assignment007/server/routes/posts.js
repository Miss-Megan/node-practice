module.exports = {
    getPosts(req, res) {
        console.log('\n\n-------- YOUR DATA STORE --------')
        console.log(req.store)
        console.log('\n\n\n\n')
        res.status(200).send(req.store.posts)
    },
    getPost(req, res) {
        const postID = req.params.postId
        if (postID >= req.store.posts.length) {
            res.status(500).send({error: `${postID} is out of range`})
        } else {
            res.status(200).send(req.store.posts[postID])
        }
    },
    addPost(req, res) {
        console.log(req.body)
        let newPost = req.body
        let postID = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({postId: postID})
    },
    updatePost(req, res) {
        const postID = req.params.postId
        req.store.posts[postID] = Object.assign(req.store.posts[postID], req.body)
        res.status(200).send(req.store.posts[postID])
    },
    removePost(req, res) {
        const postID = req.params.postId
        req.store.posts.splice(postID, 1)
        res.status(204).send()
    }
}
