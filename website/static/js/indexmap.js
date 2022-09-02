var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(33.451475, 126.570528), // 지도의 중심좌표
            level: 11 // 지도의 확대 레벨
        };
     
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
     
    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(35.8755582, 128.6053956); 
     
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
     
    // 마커가 지도 위에 표시되도록 설정합니다
    //marker.setMap(map);
     
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : "<div style='position: absolute; left: 0px; top: 0px;'><div style='width:140px;padding:1px;text-align:center;'>칠성종합시장</div></div>" 
    });
      
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    //infowindow.open(map, marker); 
     
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';                              // 마커이미지 주소
        imageSize = new kakao.maps.Size(34, 36);                // 마커이미지의 크기
        imageOption = {offset: new kakao.maps.Point(17, 36)};   // 마커의 좌표와 일치시킬 이미지 안에서의 좌표설정
          
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
   
    var arr = new Array();
    for (var i=0; i < placesjson.length; i++){
        arr[i] = [
            placesjson[i].fields.name,
            placesjson[i].fields.lat,
            placesjson[i].fields.lan,
            placesjson[i].fields.location,
            placesjson[i].fields.maplink,
            placesjson[i].pk
            ];
    }
    console.log(arr)
     
    var markerTmp;      // 마커
    var customOverlay;  // 오버레이
    var contentStr;
     
    for (var i=0;i<arr.length;i++) {
        markerTmp = new daum.maps.Marker({
            position: new daum.maps.LatLng(arr[i][1],arr[i][2]),
            title: arr[i][0],
            image: markerImage,
            map:map
        });
     
        contentStr = "<div class='customoverlay'><a href='/details/"+ arr[i][5] +"' target='_blank'><span class='title'>"+ arr[i][0] +"</span></a></div>";
        customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: new daum.maps.LatLng(arr[i][1],arr[i][2]),
            content: contentStr,
            yAnchor: 1 
        });
    }
     
     
    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl();
     
    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);    
     
    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();
     
    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
     
    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);