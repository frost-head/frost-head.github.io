// async function fetchAsync(key){
//     const response = await fetch("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key="+ key +"&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics")
//     const data = await response.json()
//     console.log(data)
// }

// fetchAsync("AIzaSyBkr4hFsGWUZafhgbGr1bve7dMwedWJNBc")

key = "AIzaSyBkr4hFsGWUZafhgbGr1bve7dMwedWJNBc"

const https = require('https')
const url = "https://youtube.googleapis.com/youtube/v3/channelId=UCJCwFQT3KK4-K_08kIcnhDg&key=" + key;
https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data);
  })
}).on('error', err => {
  console.log(err.message);
})