// express를 사용
const expres = require('express');
const app = expres();
// 첫 번째 인자는 포트 번호, 두 번째 인자는 콜백 메서드
app.listen(8080, function() {
  console.log('listening on 8080')
});

// 누군가가 /pet 으로 방문을 하면 ..
// pet 관련된 안내문을 띄워주자
app.get('/pet', function(req, res) {
  res.send('펫 용품 쇼핑 페이지 입니다.');
});
// .get()여러개로 여러 경로 생성 가능
app.get('/beauty', function(req, res) {
  res.send('뷰티 용품 쇼핑 페이지 입니다.')
})
// 메인 페이지에 html 파일을 띄워보자.
// '/' -> 홈페이지를 의미
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})