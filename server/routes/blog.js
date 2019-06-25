var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search', function (req, res, next) {
    let articles = []
    for (let index = 0; index < 5; index++) {
        let article = {
            title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
            time: Date.now(),
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing`
        }
        articles.push(article)
    }
    res.json(articles);
});

/* GET users listing. */
router.get('/view', function (req, res, next) {
    let article = {
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        time: Date.now(),
        content: `<img src="images/slider2.jpg" alt="" class="img-responsive" />
      <p class="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.</p>
      <p class="para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form alteration in some form, by injected humour, or randomised words which don't look even
        slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words. </p>`
    }
    res.json(article);
});

module.exports = router;
