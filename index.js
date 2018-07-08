function createPost() {
  let title = document.getElementById('postTitle').value
  let body = document.getElementById('postBody').value
  let author = document.getElementById('postAuthor').value
  // expect(spy).toHaveBeenCalledWith(document.getElementById("page-template").innerHTML)
  // expect(spy).toHaveBeenCalledWith(document.getElementById("post-template").innerHTML)

  // let pageTemplate = document.getElementById('page-template').innerHTML
  let postTemplate = document.getElementById('page-template').getElementById('post-template').innerHTML
  let templateFn = _.template(postTemplate)

  // it's inside of another template...
  let postDiv = document.getElementById('post')

  postDiv.innerHTML = templateFn({ 'title': title, 'body': body, 'author': author })
}

//issues with form grabbing a value?
function postComment() {
  let commenter = document.getElementById('commenterName').value
  let comment = document.getElementById('commentText').value
  let commentTemplate = document.getElementById('comment-template').innerHTML

  let templateFn = _.template(commentTemplate)

  let commentsDiv = document.getElementById('comments')

  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter })

  commentsDiv.innerHTML += templateHTML
}
