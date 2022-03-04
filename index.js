const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello NodeJS!</h1>');
  res.end('<p>Hello Daegon Lee!</p>');
})
  .listen(80, () => { // 서버 연결
    console.log('80번 포트에서 서버 대기 중입니다!');
  });