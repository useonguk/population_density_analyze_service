var container = document.getElementById("map");
var mapType = document.getElementById("type");
var type = true;

mapType.innerHTML = type ? "위성사진" : "지도";

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
  if (type) {
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
  } else {
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
  }
}
