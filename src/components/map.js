import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5485, 126.9740),
        zoom: 14,
        scaleControl: false,
      };

      const map = new window.naver.maps.Map('map', mapOptions);

      const bikeLocations = [
        { name: 'Bike Station 1', lat: 37.5485, lng: 126.9750 },
        { name: 'Bike Station 2', lat: 37.5460, lng: 126.9753 },
        { name: 'Bike Station 3', lat: 37.5464, lng: 126.9750 },
        { name: 'Bike Station 4', lat: 37.5470, lng: 126.9762 },
        { name: 'Bike Station 5', lat: 37.5462, lng: 126.9755 },
        { name: 'Bike Station 6', lat: 37.5461, lng: 126.9757 },
        // 다른 자전거 위치를 추가할 수 있습니다.
      ];

      const bikeIcon = {
        content: '<img src="bike_icon.png" style="width: 32px; height: auto;">',
        anchor: new window.naver.maps.Point(16, 16),
      };

      for (let i = 0; i < bikeLocations.length; i++) {
        const bikeMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(bikeLocations[i].lat, bikeLocations[i].lng),
          map: map,
          icon: bikeIcon,
          title: bikeLocations[i].name,
        });
      }
    };

    if (window.naver && window.naver.maps) {
      initializeMap();
    } else {
      const script = document.createElement('script');
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8szguyn811';
      script.async = true;
      script.onload = initializeMap; // 스크립트 로드 후에 initializeMap 함수를 호출합니다.
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h1>한강 공원 자전거 현황</h1>
      <div id="map" style={{ minHeight: '400px' }}></div>
    </div>
  );
};

export default Map;
