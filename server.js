var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title:'Article one | Jithin Jose',
        heading:'Article One',
        date:'Sep 21, 2016',
        content:`<p>
                    This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article.
                </p>`
    },
    'article-two' : {
        title:'Article Two | Jithin Jose',
        heading:'Article Two',
        date:'Sep 21, 2016',
        content:`<p>
                    This is the content for the Second article. This is the content for the Second article. This is the content for the Second article. This is the content for the Second article.
                </p>`
    },
    'article-three' : {
        title:'Article Three | Jithin Jose',
        heading:'Article Three',
        date:'Sep 21, 2016',
        content:`<p>
                    This is the content for the Third article. This is the content for the Third article. This is the content for the Third article. This is the content for the Third article.
                </p>`
    }

};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    ${date}
                </div>
                <div>
                    <h3>${heading}</h3>
                </div>
                <div>
                    ${content}
                </div>
                <hr/>
                <input type="text" id="comment" placeholder="add comment here" />
                <input type="submit" id="btn_comment" value="Add Comment" />
                <h3>Comments</h3>
                <ul>
                </ul>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req, res){
   counter =  counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req, res){
    //query paramater /submit-name?name=xxxx
   //Get the name from the request
   var name = req.query.name;
   
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    //articleName = article-one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
