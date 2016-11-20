const webshot = require('webshot')
const fs = require('fs')
const sanitizeFilename = require("sanitize-filename")
const dir = './ss/'

const args = process.argv.slice(2)
const defaultOptions = {
  screenSize: {
    width: 1280
  , height: 720
  }
, shotSize: {
    width: 1280
  , height: 'all'
  }
, defaultWhiteBackground: true
}

if (args.length < 1) {
  console.log('Please pass a parameter for the webpage: node screenShots.js google.com')
  process.exit(1)
} else {
  const webpage = args[0]
  takeScreenshot(webpage)
}

function takeScreenshot(webpage, options=defaultOptions){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }

  webshot(webpage, dir + sanitizeFilename(webpage + '.png'), options, err=>{
    if (err){
      return console.error('Err:', err)
    }
    console.log('webpage recorded:', webpage)
  })
}
