let roadmapBtn = document.querySelector('.show-roadmap')

roadmapBtn.addEventListener('click', function() {
    document.querySelector('#map').classList.toggle('show');

    roadmapBtn.innerText === "로드맵보기" ? 
    roadmapBtn.innerText = "지도보기" : 
    roadmapBtn.innerText = "로드맵보기";
});