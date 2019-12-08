const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

const app = express();

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

//schedule tasks to be run on the server
cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
});

app.listen(3128);
