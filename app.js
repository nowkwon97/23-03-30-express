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

app.get('/beauty', function(req, res) {
  res.send('뷰티 용품 쇼핑 페이지 입니다.')
})