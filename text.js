// import positions from "./list";

//마커
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
  {
    content:
      "<div style=\"background-image: url('./img/가정동.png')\">가정동</div>",
    latlng: new kakao.maps.LatLng(37.5273, 126.6756),
  },
  {
    content:
      "<div style=\"background-image: url('./img/가좌동.png')\">가좌동</div>",
    latlng: new kakao.maps.LatLng(37.4898, 126.6737),
  },
  {
    content:
      "<div style=\"background-image: url('./img/간석동.png')\">간석동</div>",
    latlng: new kakao.maps.LatLng(37.4655, 126.7072),
  },
  {
    content:
      "<div style=\"background-image: url('./img/길산동.png')\">갈산동</div>",
    latlng: new kakao.maps.LatLng(37.5155, 126.7266),
  },
  {
    content:
      "<div style=\"background-image: url('./img/갈현동.png')\">갈현동</div>",
    latlng: new kakao.maps.LatLng(37.5789, 126.722),
  },
  {
    content:
      "<div style=\"background-image: url('./img/강화읍.png')\">강화읍</div>",
    latlng: new kakao.maps.LatLng(37.7526, 126.4874),
  },
  {
    content:
      "<div style=\"background-image: url('./img/검암동.png')\">검암동</div>",
    latlng: new kakao.maps.LatLng(37.5645, 126.675),
  },
  {
    content:
      "<div style=\"background-image: url('./img/경동.png')\">경동</div>",
    latlng: new kakao.maps.LatLng(37.471682516282, 126.63324675542),
  },
  {
    content:
      "<div style=\"background-image: url('./img/경서동.png')\">경서동</div>",
    latlng: new kakao.maps.LatLng(37.5561, 126.6512),
  },
  {
    content:
      "<div style=\"background-image: url('./img/계산동.png')\">계산동</div>",
    latlng: new kakao.maps.LatLng(37.5429, 126.723),
  },
  {
    content:
      "<div style=\"background-image: url('./img/고잔동.png')\">고잔동</div>",
    latlng: new kakao.maps.LatLng(37.395, 126.6954),
  },
  {
    content:
      "<div style=\"background-image: url('./img/공촌동.png')\">공촌동</div>",
    latlng: new kakao.maps.LatLng(37.5512, 126.6946),
  },
  {
    content:
      "<div style=\"background-image: url('./img/관동1가.png')\">관동1가</div>",
    latlng: new kakao.maps.LatLng(37.4737, 126.6216),
  },
  {
    content:
      "<div style=\"background-image: url('./img/관교동.png')\">관교동</div>",
    latlng: new kakao.maps.LatLng(37.4427, 126.6944),
  },
  {
    content:
      "<div style=\"background-image: url('./img/관동2가.png')\">관동2가</div>",
    latlng: new kakao.maps.LatLng(37.4727, 126.6235),
  },
  {
    content:
      "<div style=\"background-image: url('./img/관동3가.png')\">관동3가</div>",
    latlng: new kakao.maps.LatLng(37.4721, 126.6248),
  },
  {
    content:
      "<div style=\"background-image: url('./img/교동면.png')\">교동면</div>",
    latlng: new kakao.maps.LatLng(37.7868, 126.2655),
  },
  {
    content:
      "<div style=\"background-image: url('./img/구산동.png')\">구산동</div>",
    latlng: new kakao.maps.LatLng(37.4729, 126.7535),
  },
  {
    content:
      "<div style=\"background-image: url('./img/구월동.png')\">구월동</div>",
    latlng: new kakao.maps.LatLng(37.4486, 126.7111),
  },
  {
    content:
      "<div style=\"background-image: url('./img/귤현동.png')\">귤현동</div>",
    latlng: new kakao.maps.LatLng(37.5675, 126.747),
  },
  {
    content:
      "<div style=\"background-image: url('./img/금곡동.png')\">금곡동</div>",
    latlng: new kakao.maps.LatLng(37.473, 126.6388),
  },
  {
    content:
      "<div style=\"background-image: url('./img/길상면.png')\">길상면</div>",
    latlng: new kakao.maps.LatLng(37.6306, 126.4971),
  },
  {
    content:
      "<div style=\"background-image: url('./img/남북동.png')\">남북동</div>",
    latlng: new kakao.maps.LatLng(37.4498, 126.4137),
  },
  {
    content:
      "<div style=\"background-image: url('./img/남촌동.png')\">남촌동</div>",
    latlng: new kakao.maps.LatLng(37.4247, 126.7104),
  },
  {
    content:
      "<div style=\"background-image: url('./img/내가면.png')\">내가면</div>",
    latlng: new kakao.maps.LatLng(37.7234, 126.3937),
  },
  {
    content:
      "<div style=\"background-image: url('./img/내동.png')\">내동</div>",
    latlng: new kakao.maps.LatLng(37.4734, 126.6279),
  },

  {
    content:
      "<div style=\"background-image: url('./img/노오지동.png')\">노오지동</div>",
    latlng: new kakao.maps.LatLng(37.3446, 126.4529),
  },
  {
    content:
      "<div style=\"background-image: url('./img/논현동.png')\">논현동</div>",
    latlng: new kakao.maps.LatLng(37.4047, 126.7247),
  },
  {
    content:
      "<div style=\"background-image: url('./img/다남동.png')\">다남동</div>",
    latlng: new kakao.maps.LatLng(37.5639, 126.7227),
  },
  {
    content:
      "<div style=\"background-image: url('./img/답동.png')\">답동</div>",
    latlng: new kakao.maps.LatLng(37.4698, 126.6292),
  },
  {
    content:
      "<div style=\"background-image: url('./img/당하동.png')\">당하동</div>",
    latlng: new kakao.maps.LatLng(37.5873, 126.6939),
  },
  {
    content:
      "<div style=\"background-image: url('./img/대곡동.png')\">대곡동</div>",
    latlng: new kakao.maps.LatLng(37.627442093082, 126.66435904755),
  },
  {
    content:
      "<div style=\"background-image: url('./img/덕교동.png')\">덕교동</div>",
    latlng: new kakao.maps.LatLng(37.4353, 126.4198),
  },
  {
    content:
      "<div style=\"background-image: url('./img/도림동.png')\">도림동</div>",
    latlng: new kakao.maps.LatLng(37.4189, 126.7265),
  },
  {
    content:
      "<div style=\"background-image: url('./img/도원동.png')\">도원동</div>",
    latlng: new kakao.maps.LatLng(37.4672, 126.6396),
  },
  {
    content:
      "<div style=\"background-image: url('./img/도화동.png')\">도화동</div>",
    latlng: new kakao.maps.LatLng(37.4705, 126.6643),
  },
  {
    content:
      "<div style=\"background-image: url('./img/동양동.png')\">동양동</div>",
    latlng: new kakao.maps.LatLng(37.559, 126.7611),
  },
  {
    content:
      "<div style=\"background-image: url('./img/동춘동.png')\">동춘동</div>",
    latlng: new kakao.maps.LatLng(37.4069, 126.6644),
  },
  {
    content:
      "<div style=\"background-image: url('./img/둑실동.png')\">둑실동</div>",
    latlng: new kakao.maps.LatLng(37.5761, 126.698),
  },

  {
    content:
      "<div style=\"background-image: url('./img/마전동.png')\">마전동</div>",
    latlng: new kakao.maps.LatLng(37.6055, 126.667),
  },
  {
    content:
      "<div style=\"background-image: url('./img/만석동.png')\">만석동</div>",
    latlng: new kakao.maps.LatLng(37.4862, 126.6207),
  },
  {
    content:
      "<div style=\"background-image: url('./img/만수동.png')\">만수동</div>",
    latlng: new kakao.maps.LatLng(37.4549, 126.7351),
  },
  {
    content:
      "<div style=\"background-image: url('./img/목상동.png')\">목상동</div>",
    latlng: new kakao.maps.LatLng(37.5643, 126.7102),
  },
  {
    content:
      "<div style=\"background-image: url('./img/무의동.png')\">무의동</div>",
    latlng: new kakao.maps.LatLng(37.3867, 126.4188),
  },
  {
    content:
      "<div style=\"background-image: url('./img/문학동.png')\">문학동</div>",
    latlng: new kakao.maps.LatLng(37.4374, 126.6832),
  },
  {
    content:
      "<div style=\"background-image: url('./img/박촌동.png')\">박촌동</div>",
    latlng: new kakao.maps.LatLng(37.5519, 126.7516),
  },
  {
    content:
      "<div style=\"background-image: url('./img/방축동.png')\">방축동</div>",
    latlng: new kakao.maps.LatLng(37.5545, 126.7333),
  },
  {
    content:
      "<div style=\"background-image: url('./img/백석동.png')\">백석동</div>",
    latlng: new kakao.maps.LatLng(37.5792, 126.6689),
  },
  {
    content:
      "<div style=\"background-image: url('./img/병방동.png')\">병방동</div>",
    latlng: new kakao.maps.LatLng(37.5455, 126.7491),
  },
  {
    content:
      "<div style=\"background-image: url('./img/부개동.png')\">부개동</div>",
    latlng: new kakao.maps.LatLng(37.4929, 126.7372),
  },
  {
    content:
      "<div style=\"background-image: url('./img/부평동.png')\">부평동</div>",
    latlng: new kakao.maps.LatLng(37.4892, 126.7234),
  },
  {
    content:
      "<div style=\"background-image: url('./img/북성동1가.png')\">북성동1가</div>",
    latlng: new kakao.maps.LatLng(37.4757, 126.6064),
  },
  {
    content:
      "<div style=\"background-image: url('./img/북성동2가.png')\">북성동2가</div>",
    latlng: new kakao.maps.LatLng(37.4766, 126.6183),
  },
  {
    content:
      "<div style=\"background-image: url('./img/북성동3가.png')\">북성동3가</div>",
    latlng: new kakao.maps.LatLng(37.4761, 126.6207),
  },

  {
    content:
      "<div style=\"background-image: url('./img/불로동.png')\">불로동</div>",
    latlng: new kakao.maps.LatLng(37.6099, 126.6887),
  },
  {
    content:
      "<div style=\"background-image: url('./img/불은면.png')\">불은면</div>",
    latlng: new kakao.maps.LatLng(37.6849, 126.4815),
  },
  {
    content:
      "<div style=\"background-image: url('./img/사동.png')\">사동</div>",
    latlng: new kakao.maps.LatLng(37.4688, 126.6255),
  },
  {
    content:
      "<div style=\"background-image: url('./img/산곡동.png')\">산곡동</div>",
    latlng: new kakao.maps.LatLng(37.5001, 126.7023),
  },
  {
    content:
      "<div style=\"background-image: url('./img/삼산동.png')\">삼산동</div>",
    latlng: new kakao.maps.LatLng(37.5172, 126.7436),
  },
  {
    content:
      "<div style=\"background-image: url('./img/삼산면.png')\">삼산면</div>",
    latlng: new kakao.maps.LatLng(37.6966, 126.3262),
  },
  {
    content:
      "<div style=\"background-image: url('./img/상야동.png')\">상야동</div>",
    latlng: new kakao.maps.LatLng(37.5749, 126.7721),
  },
  {
    content:
      "<div style=\"background-image: url('./img/서운동.png')\">서운동</div>",
    latlng: new kakao.maps.LatLng(37.5309, 126.7516),
  },
  {
    content:
      "<div style=\"background-image: url('./img/서창동.png')\">서창동</div>",
    latlng: new kakao.maps.LatLng(37.4309, 126.7492),
  },
  {
    content:
      "<div style=\"background-image: url('./img/석남동.png')\">석남동</div>",
    latlng: new kakao.maps.LatLng(37.5055, 126.6665),
  },
  {
    content:
      "<div style=\"background-image: url('./img/선린동.png')\">선린동</div>",
    latlng: new kakao.maps.LatLng(37.4746, 126.6182),
  },
  {
    content:
      "<div style=\"background-image: url('./img/선원면.png')\">선원면</div>",
    latlng: new kakao.maps.LatLng(37.717, 126.4856),
  },
  {
    content:
      "<div style=\"background-image: url('./img/선주지동.png')\">선주지동</div>",
    latlng: new kakao.maps.LatLng(37.5781, 126.7479),
  },
  {
    content:
      "<div style=\"background-image: url('./img/선학동.png')\">선학동</div>",
    latlng: new kakao.maps.LatLng(37.4297, 126.6976),
  },
  {
    content:
      "<div style=\"background-image: url('./img/선화동.png')\">선화동</div>",
    latlng: new kakao.maps.LatLng(37.4657, 126.6373),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송도동.png')\">송도동</div>",
    latlng: new kakao.maps.LatLng(37.3861, 126.6389),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송림동.png')\">송림동</div>",
    latlng: new kakao.maps.LatLng(37.4786, 126.6509),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송월동1가.png')\">송월동1가</div>",
    latlng: new kakao.maps.LatLng(37.48, 126.6234),
  },

  {
    content:
      "<div style=\"background-image: url('./img/송월동2가.png')\">송월동2가</div>",
    latlng: new kakao.maps.LatLng(37.4792, 126.6194),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송월동3가.png')\">송월동3가</div>",
    latlng: new kakao.maps.LatLng(37.4781, 126.6211),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송학동1가.png')\">송학동1가</div>",
    latlng: new kakao.maps.LatLng(37.4746, 126.6225),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송학동2가.png')\">송학동2가</div>",
    latlng: new kakao.maps.LatLng(37.474, 126.6246),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송해면.png')\">송해면</div>",
    latlng: new kakao.maps.LatLng(37.7797, 126.4581),
  },
  {
    content:
      "<div style=\"background-image: url('./img/송현동.png')\">송현동</div>",
    latlng: new kakao.maps.LatLng(37.4869, 126.6399),
  },
  {
    content:
      "<div style=\"background-image: url('./img/수산동.png')\">수산동</div>",
    latlng: new kakao.maps.LatLng(37.4367, 126.7274),
  },
  {
    content:
      "<div style=\"background-image: url('./img/숭의동.png')\">숭의동</div>",
    latlng: new kakao.maps.LatLng(37.4631, 126.6509),
  },
  {
    content:
      "<div style=\"background-image: url('./img/시천동.png')\">시천동</div>",
    latlng: new kakao.maps.LatLng(37.5708, 126.688),
  },
  {
    content:
      "<div style=\"background-image: url('./img/신생동.png')\">신생동</div>",
    latlng: new kakao.maps.LatLng(37.4671, 126.628),
  },
  {
    content:
      "<div style=\"background-image: url('./img/신현동.png')\">신현동</div>",
    latlng: new kakao.maps.LatLng(37.519, 126.6671),
  },
  {
    content:
      "<div style=\"background-image: url('./img/신흥동1가.png')\">신흥동1가</div>",
    latlng: new kakao.maps.LatLng(37.467, 126.6314),
  },
  {
    content:
      "<div style=\"background-image: url('./img/신흥동2가.png')\">신흥동2가</div>",
    latlng: new kakao.maps.LatLng(37.4663, 126.6339),
  },
  {
    content:
      "<div style=\"background-image: url('./img/신흥동3가.png')\">신흥동3가</div>",
    latlng: new kakao.maps.LatLng(37.4429, 126.6262),
  },
  {
    content:
      "<div style=\"background-image: url('./img/심곡동.png')\">심곡동</div>",
    latlng: new kakao.maps.LatLng(37.5415, 126.68),
  },
  {
    content:
      "<div style=\"background-image: url('./img/십정동.png')\">십정동</div>",
    latlng: new kakao.maps.LatLng(37.4774, 126.6998),
  },
  {
    content:
      "<div style=\"background-image: url('./img/양도면.png')\">양도면</div>",
    latlng: new kakao.maps.LatLng(37.6731, 126.4325),
  },
  {
    content:
      "<div style=\"background-image: url('./img/양사면.png')\">양사면</div>",
    latlng: new kakao.maps.LatLng(37.8019, 126.402),
  },
  {
    content:
      "<div style=\"background-image: url('./img/양흥면.png')\">양흥면</div>",
    latlng: new kakao.maps.LatLng(37.2586, 126.462),
  },
  {
    content:
      "<div style=\"background-image: url('./img/연수동.png')\">연수동</div>",
    latlng: new kakao.maps.LatLng(37.4204, 126.6833),
  },
  {
    content:
      "<div style=\"background-image: url('./img/연희동.png')\">연희동</div>",
    latlng: new kakao.maps.LatLng(37.549338272606, 126.67497196652),
  },
  {
    content:
      "<div style=\"background-image: url('./img/오류동.png')\">오류동</div>",
    latlng: new kakao.maps.LatLng(37.5947, 126.6195),
  },
  {
    content:
      "<div style=\"background-image: url('./img/옥련동.png')\">옥련동</div>",
    latlng: new kakao.maps.LatLng(37.4243, 126.6485),
  },
  {
    content:
      "<div style=\"background-image: url('./img/왕길동.png')\">왕길동</div>",
    latlng: new kakao.maps.LatLng(37.6485, 126.6508),
  },
  {
    content:
      "<div style=\"background-image: url('./img/용동.png')\">용동</div>",
    latlng: new kakao.maps.LatLng(37.4732, 126.6312),
  },
  {
    content:
      "<div style=\"background-image: url('./img/용종동.png')\">용종동</div>",
    latlng: new kakao.maps.LatLng(37.5408, 126.7448),
  },
  {
    content:
      "<div style=\"background-image: url('./img/용현동.png')\">용현동</div>",
    latlng: new kakao.maps.LatLng(37.4517, 126.6471),
  },
  {
    content:
      "<div style=\"background-image: url('./img/운남동.png')\">운남동</div>",
    latlng: new kakao.maps.LatLng(37.4848, 126.5297),
  },
  {
    content:
      "<div style=\"background-image: url('./img/운북동.png')\">운북동</div>",
    latlng: new kakao.maps.LatLng(37.5147, 126.5173),
  },
  {
    content:
      "<div style=\"background-image: url('./img/운서동.png')\">운서동</div>",
    latlng: new kakao.maps.LatLng(37.4695, 126.4508),
  },
  {
    content:
      "<div style=\"background-image: url('./img/운연동.png')\">운연동</div>",
    latlng: new kakao.maps.LatLng(37.4396, 126.7643),
  },
  {
    content:
      "<div style=\"background-image: url('./img/원당동.png')\">원당동</div>",
    latlng: new kakao.maps.LatLng(37.5969, 126.7079),
  },
  {
    content:
      "<div style=\"background-image: url('./img/유동.png')\">유동</div>",
    latlng: new kakao.maps.LatLng(37.4697, 126.637),
  },
  {
    content:
      "<div style=\"background-image: url('./img/을왕동.png')\">을왕동</div>",
    latlng: new kakao.maps.LatLng(37.4553, 126.3794),
  },
  {
    content:
      "<div style=\"background-image: url('./img/이화동.png')\">이화동</div>",
    latlng: new kakao.maps.LatLng(37.5871, 126.7386),
  },
  {
    content:
      "<div style=\"background-image: url('./img/인현동.png')\">인현동</div>",
    latlng: new kakao.maps.LatLng(37.4749, 126.6314),
  },
  {
    content:
      "<div style=\"background-image: url('./img/일신동.png')\">일신동</div>",
    latlng: new kakao.maps.LatLng(37.4797, 126.7487),
  },
  {
    content:
      "<div style=\"background-image: url('./img/임학동.png')\">임학동</div>",
    latlng: new kakao.maps.LatLng(37.5472, 126.7342),
  },
  {
    content:
      "<div style=\"background-image: url('./img/작전동.png')\">작전동</div>",
    latlng: new kakao.maps.LatLng(37.5298, 126.7298),
  },
  {
    content:
      "<div style=\"background-image: url('./img/장기동.png')\">장기동</div>",
    latlng: new kakao.maps.LatLng(37.5759, 126.7351),
  },
  {
    content:
      "<div style=\"background-image: url('./img/장수동.png')\">장수동</div>",
    latlng: new kakao.maps.LatLng(37.4589, 126.7611),
  },
  {
    content:
      "<div style=\"background-image: url('./img/전동.png')\">전동</div>",
    latlng: new kakao.maps.LatLng(37.4772, 126.6261),
  },
  {
    content:
      "<div style=\"background-image: url('./img/주안동.png')\">주안동</div>",
    latlng: new kakao.maps.LatLng(37.463182225352, 126.69487873676),
  },
  {
    content:
      "<div style=\"background-image: url('./img/중산동.png')\">중산동</div>",
    latlng: new kakao.maps.LatLng(37.4992, 126.5597),
  },

  {
    content:
      "<div style=\"background-image: url('./img/중앙동1가.png')\">중앙동1가</div>",
    latlng: new kakao.maps.LatLng(37.4735, 126.6205),
  },
  {
    content:
      "<div style=\"background-image: url('./img/중앙동3가.png')\">중앙동3가</div>",
    latlng: new kakao.maps.LatLng(37.472, 126.6229),
  },
  {
    content:
      "<div style=\"background-image: url('./img/창영동.png')\">창영동</div>",
    latlng: new kakao.maps.LatLng(37.4707, 126.6408),
  },
  {
    content:
      "<div style=\"background-image: url('./img/청라동.png')\">청라동</div>",
    latlng: new kakao.maps.LatLng(37.5345, 126.6277),
  },
  {
    content:
      "<div style=\"background-image: url('./img/청천동.png')\">청천동</div>",
    latlng: new kakao.maps.LatLng(37.5163, 126.7052),
  },
  {
    content:
      "<div style=\"background-image: url('./img/청학동.png')\">청학동</div>",
    latlng: new kakao.maps.LatLng(37.4248, 126.6665),
  },
  {
    content:
      "<div style=\"background-image: url('./img/평동.png')\">평동</div>",
    latlng: new kakao.maps.LatLng(37.5835, 126.7716),
  },
  {
    content:
      "<div style=\"background-image: url('./img/하야동.png')\">하야동</div>",
    latlng: new kakao.maps.LatLng(37.5809, 126.7859),
  },
  {
    content:
      "<div style=\"background-image: url('./img/하점면.png')\">하점면</div>",
    latlng: new kakao.maps.LatLng(37.7628, 126.4004),
  },
  {
    content:
      "<div style=\"background-image: url('./img/학익동.png')\">학익동</div>",
    latlng: new kakao.maps.LatLng(37.4395, 126.6547),
  },
  {
    content:
      "<div style=\"background-image: url('./img/항동1가.png')\">항동1가</div>",
    latlng: new kakao.maps.LatLng(37.4739, 126.6168),
  },
  {
    content:
      "<div style=\"background-image: url('./img/항동2가.png')\">항동2가</div>",
    latlng: new kakao.maps.LatLng(37.4724, 126.6176),
  },
  {
    content:
      "<div style=\"background-image: url('./img/항동4가.png')\">항동4가</div>",
    latlng: new kakao.maps.LatLng(37.4714, 126.6205),
  },
  {
    content:
      "<div style=\"background-image: url('./img/항동5가.png')\">항동5가</div>",
    latlng: new kakao.maps.LatLng(37.4707, 126.6217),
  },
  {
    content:
      "<div style=\"background-image: url('./img/항동7가.png')\">항동7가</div>",
    latlng: new kakao.maps.LatLng(37.4499, 126.6183),
  },
  {
    content:
      "<div style=\"background-image: url('./img/항동3가.png')\">항동3가</div>",
    latlng: new kakao.maps.LatLng(37.4721, 126.6194),
  },
  {
    content:
      "<div style=\"background-image: url('./img/화도면.png')\">화도면</div>",
    latlng: new kakao.maps.LatLng(37.6194, 126.4244),
  },
  {
    content:
      "<div style=\"background-image: url('./img/화수동.png')\">화수동</div>",
    latlng: new kakao.maps.LatLng(37.485, 126.6299),
  },
  {
    content:
      "<div style=\"background-image: url('./img/화평동.png')\">화평동</div>",
    latlng: new kakao.maps.LatLng(37.4791, 126.631),
  },
  {
    content:
      "<div style=\"background-image: url('./img/효성동.png')\">효성동</div>",
    latlng: new kakao.maps.LatLng(37.5318, 126.7022),
  },
];

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
