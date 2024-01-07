const T = require("tesseract.js")
T.recognize('./photo.jpg','eng',{ logger: e => console.log(e)})
    .then(out => console.log(out.data.text))

    // replace "out" in console.log(out) with "out.data.text"
    // to get only text from data fetched in console.