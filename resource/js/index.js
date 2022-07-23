const reviews = [
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br><br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  }
]

$(document).ready(function(){
  setReviews()
  const swiper1 = new Swiper("#reviews", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    observeParents: true,
    observer: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: (e) => {
        setActiveClass(e.realIndex)
      },
      slideChange: (e) => {
        setActiveClass(e.realIndex)
      }
    }
  });
})

const setReviews = () => {
  let html = ''

  reviews.forEach(r => {
    html += `
    <div class="swiper-slide">
      <img src="./resource/img/pc/quotation.svg" alt="quotation">
      <p class="content">
        ${r.content}
      </p>
      <p class="date">${r.date}</p>
      <p class="name">${r.name}님</p>
    </div>
    `
  })
  $('#reviews .swiper-wrapper').append(html)
}

const setActiveClass = (index) => {
  $('#reviews .swiper-slide').removeClass('active')
  for(i = index; i <= index + 2; i++){
    $('#reviews .swiper-slide').eq(i).addClass('active')
  }
}