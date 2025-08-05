const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('البوت شغال ✅');
});

app.listen(3000, () => {
  console.log('🌐 Keep-alive webserver running on port 3000');
});
