const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

const app = express();

// GUIDELINES
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

//deletes the error.log file on the 21st of every month
cron.schedule('* * 21 * *', function() {
  console.log('----------------------------------');
  console.log('Running Cron Job');
  fs.unlink('./error.log', err => {
    if (err) throw err;
    console.log('Error file successfully deleted');
  });
});

app.listen(3128);
