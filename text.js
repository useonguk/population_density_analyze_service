// import positions from "./list";

var container = document.getElementById("map");
var mapType = document.getElementById("type");
var type = true;

var options = {
  center: new kakao.maps.LatLng(37.4563, 126.7052),
  level: 3,
};

var map = new kakao.maps.Map(container, options);
//로드뷰 위치 보여주기
// map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);

function zoomOut() {
  map.setLevel(map.getLevel() + 1);
}

function zoomIn() {
  map.setLevel(map.getLevel() - 1);
}

function changeMapType() {
  type = !type;
  mapType.innerHTML = type ? "위성사진" : "지도";
  if (type) {
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
  } else {
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
  }
}

for (var i = 0; i < positions.length; i++) {
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커의 위치
  });

  // 마커에 표시할 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].content, // 인포윈도우에 표시할 내용
  });

  // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
  // 이벤트 리스너로는 클로저를 만들어 등록합니다
  // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );
  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}
