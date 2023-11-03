import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5109799, 126.9992935),
        zoom: 13.5,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map("map", mapOptions);

      const cycles = [
        { name: "Bike Station 1", lat: 37.5109799, lng: 126.9972935 },
        { name: "Bike Station 2", lat: 37.5111051, lng: 126.9965601 },
        { name: "Bike Station 3", lat: 37.5109799, lng: 126.9972935 },
        { name: "Bike Station 4", lat: 37.5092358, lng: 126.9940292 },
        { name: "Bike Station 5", lat: 37.515214, lng: 126.9852786 },
        { name: "Bike Station 6", lat: 37.5055991, lng: 126.9816423 },
        { name: "Bike Station 7", lat: 37.5075175, lng: 126.9885175 },
        { name: "Bike Station 8", lat: 37.5065417, lng: 126.9839388 },
        { name: "Bike Station 9", lat: 37.5052439, lng: 126.9794125 },
        { name: "Bike Station 10", lat: 37.5152439, lng: 126.9794125 },
        { name: "Bike Station 11", lat: 37.5052439, lng: 126.6794125 },
        { name: "Bike Station 12", lat: 37.5052439, lng: 126.8794125 },
      ];

      const festivals = [
        {
          name: "MUTE SEOUL-한강무소음DJ파티",
          status: "종료",
          location: "반포한강공원 동측 달빛광장",
          lat: 37.5123463,
          lng: 126.9985806,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=4e77b6bb8a774f51bf818452c4c6c6d5.jpg&day=202308",
        },
        {
          name: "광진교8번가 11월 행사",
          status: "진행중",
          location: "서울 강동구 천호동 527-2",
          lat: 37.5452309,
          lng: 127.1126881,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/down.do?fkey=68b1d4fee5e4d3704f1c76fb23fb2bc8089c183ef724011f6c184166452bab6ffdfb9b5464957448502b6d7168f681815842879a55713a46b454e2954e871e03",
        },
        {
          name: "2023 한강불빛공연 드론 라이트쇼",
          status: "진행중",
          location: "뚝섬한강공원 수변무대",
          lat: 37.5287041,
          lng: 127.0719861,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/down.do?fkey=c60cbebe7c5041b8be65ab16183d622d3d3632752c0a96ff23ccd3699f1204d6e09b72f8faed5c1c84d4e0317b2d45ec5a4d1a7f3e21eabf470d82342b25a5c8",
        },
      ];

      const events = [
        {
          name: "2023 한강역사탐방",
          status: "진행중",
          location: "서울 송파구 풍납동 490-16",
          lat: 37.5348975,
          lng: 127.1218364,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/down.do?fkey=c92e73edf7dede14ff427570e11c8303fd2132ab1e78aab76f10902041194b672a1fabf4be11bf3d728c9b4b3ff38babf84761650cb4f989e62ec6bdead99e35",
        },
        {
          name: "잠원 그라스 정원",
          status: "진행중",
          location: "서초구 잠원로 221-124",
          lat: 37.5192586,
          lng: 127.0093584,
          imgUrl:
            "https://hangang.seoul.go.kr/resources/zeroCMS/site/www/images/attraction_season_img02.jpg",
        },
        {
          name: "2023 차 없는 잠수교 뚜벅뚜벅 축제 (하반기)",
          status: "진행중",
          location: "서울 서초구 반포동 649",
          lat: 37.512672,
          lng: 126.9968636,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/down.do?fkey=38cb7b0b13fc7d300801caa15f2930091d3c84f6909b44372a64249619c5e6abbc3a46924908ebed2800898877f24c5ba6df696b518b055d6b59e16d7dbb968e",
        },
        {
          name: "잠수교 달빛무지개분수",
          status: "진행중",
          location: "잠수교",
          lat: 37.515058,
          lng: 126.9964389,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=43f18a1f7a5f44268014105d0c835da0.jpg&day=202309",
        },
        {
          name: "2023 문화가 흐르는 예술마당 11월 공연",
          status: "진행중",
          location: "서울 용산구 이촌동 302-146",
          lat: 37.518172,
          lng: 126.9577014,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=0e0ceaa7a01c40959b15d8993963a0a4.jpg&day=202305",
        },
        {
          name: "광나루수영장",
          status: "종료",
          location: "서울시 강동구 천호동 351-1",
          lat: 37.5473588,
          lng: 127.120052,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/down.do?fkey=7d35ea04c3b0d84a89d1d6fa928ec5c3f7cc6d2966b7f7507831b0d0440016e740eaf53b8950b8c36f3a47cc9bd1759c2a39c154cad74bd8b67a1e7ce8d8c353",
        },
        {
          name: "뚝섬수영장",
          status: "종료",
          location: "서울시 광진구 자양동 112",
          lat: 37.5299661,
          lng: 127.0679299,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/down.do?fkey=540baf0ad00c61807eb6f2d908230972e46b4787b81634298a8564e1872bb04004bd575633ef97d97cb8ad18d94081fcaa9f9bc3e15b84ab0648f29493b1ac0f",
        },
        {
          name: "한강물빛영화관",
          status: "종료",
          location: "강서한강공원 방화대교 남단",
          lat: 37.5848305,
          lng: 126.8221203,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=184b3c3488204200b4de1bca68e67bb3.jpg&day=202310",
        },
        {
          name: "나홀로 요가",
          status: "종료",
          location: "서울 서초구 잠원동 121",
          lat: 37.5192671,
          lng: 127.0092833,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=3cb6079063c846bd9c479ddc2ac22a5c.jpg&day=202310",
        },
        {
          name: "나홀로 요가",
          status: "종료",
          location: "서울 용산구 이촌동 302-17",
          lat: 37.5173967,
          lng: 126.9704705,
          imgUrl:
            "https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=3cb6079063c846bd9c479ddc2ac22a5c.jpg&day=202310",
        },
      ];

      const bikeIcon = {
        content: '<img src="cycle.png" style="width: 30px; height: auto;">',
        anchor: new window.naver.maps.Point(16, 16),
      };

      for (let i = 0; i < cycles.length; i++) {
        const bikeMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(cycles[i].lat, cycles[i].lng),
          map: map,
          icon: bikeIcon,
          title: cycles[i].name,
        });
      }

      const eventIcon = {
        content: '<img src="event.png" style="width: 30px; height: auto;">',
        anchor: new window.naver.maps.Point(16, 16),
      };

      for (let i = 0; i < events.length; i++) {
        const eventMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(events[i].lat, events[i].lng),
          map: map,
          icon: eventIcon,
          title: events[i].name,
        });
      }

      const festivalIcon = {
        content: '<img src="festival.png" style="width: 30px; height: auto;">',
        anchor: new window.naver.maps.Point(16, 16),
      };

      for (let i = 0; i < festivals.length; i++) {
        const eventMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(
            festivals[i].lat,
            festivals[i].lng
          ),
          map: map,
          icon: festivalIcon,
          title: festivals[i].name,
        });
      }
    };

    if (window.naver && window.naver.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8szguyn811";
      script.async = true;
      script.onload = initializeMap; // 스크립트 로드 후에 initializeMap 함수를 호출합니다.
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h1>한강 공원 자전거 현황</h1>
      <div id="map" style={{ minHeight: "400px" }}></div>
    </div>
  );
};

export default Map;
