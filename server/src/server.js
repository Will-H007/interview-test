/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require("express");
const sermonData = require("./fixture-sermon-data");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
  Simple branch search api wrapper.

  TODO: client should provide params.
  */



  function searchWordInString(method, str, word) {
    switch (method) {
      case 'includes':
        return str.includes(word);
      case 'indexOf':
        return str.indexOf(word) !== -1;
      case 'regex':
        let regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' for case insensitive, '\\b' for word boundary
        return regex.test(str);
      case 'caseInsensitive':
        str = str.toLocaleLowerCase();
        word = word.toLocaleLowerCase();
        return str.includes(word);
      default:
        return false;
    }
  }

  function searchWordInSermon(item, word){

    return (
      searchWordInString("caseInsensitive", item.title, word) || searchWordInString("caseInsensitive", item.series, word) || searchWordInString("caseInsensitive", item.preacher, word)
      
    );

  }

app.get("/api/sermon/search", async (req, res) => {
 // res.json({ message: 'POST request to /api/sermon/query received' });
 try {

  // TODO: filter results based on query parameters.

  res.json(sermonData);
  
} catch (err) {
  res.status(500).send(err);
  console.error(err);
}
});


// Allow the client to post query for searching
app.post('/api/sermon/query', (req, res) => {

  try {
  
   
    // // TODO: filter results based on query parameters.
    var filteredData = sermonData.sermons.filter(item => searchWordInSermon(item, req.body.query))

    
    res.json(filteredData);

  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});


app.listen(4000, () => {
  console.log("Node server listening on http://localhost:4000");
});
