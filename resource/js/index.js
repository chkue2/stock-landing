const reviews = [
  {
    content: '오 저 수익률 이렇게 좋은거 처음봐여 역시,,, 초보혼자할 때랑 차원이 다르네요<br>요즘 계속 하락장이어서 수익 본지 언젠지도 모르겠는데ㅠㅠ 덕분에 돈 벌었어요!!',
    date: '2022.07.01',
    name: '박귀리'
  },
  {
    content: '지난번에 수익 났을 때 현금 확보 했었는데 헐 ㅋㅋㅋ<br>익절인걸로도 만족하지만 수익률 보니까 부럽긴합니다.',
    date: '2022.07.01',
    name: '덕구'
  },
  {
    content: '후우 35% 먹을 수 있었는데 ㅋㅋㅋㅋ <br>너무 배가 부르죠? ㅋㅋㅋ',
    date: '2022.07.01',
    name: 'u'
  },
  {
    content: '대단하십니다… 참 감사해요…. 아까 십오퍼센트 익절했답니다….',
    date: '2022.07.01',
    name: '임진호'
  },
  {
    content: '대박 ㅋㅋㅋㅋㅋㅋㅋ<br>35%요???????',
    date: '2022.07.01',
    name: '현준'
  },
]

$(document).ready(function(){
  setReviews()
  const swiper1 = new Swiper("#reviews", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    observeParents: true,
    observer: true,
    breakpoints: {
      959: {
        spaceBetween: 40,
      }
    },
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
  
  if(window.innerHeight >= 960){
    for(i = index; i <= index + 2; i++){
      $('#reviews .swiper-slide').eq(i).addClass('active')
    }
  } else {
    $('#reviews .swiper-slide').eq(index).addClass('active')
  }
}

$(document).on('click', '.button', function(){
  openFormModal()
})

const openFormModal = () => {
  $('#formModal').show()
}

const closeFormModal = () => {
  $('#formModal').hide()
}

const sendForm = () => {
  const name = $('#name').val()
  const tel1 = $('#tel1').val()
  const tel2 = $('#tel2').val()
  const tel3 = $('#tel3').val()
  const tel = `${tel1}-${tel2}-${tel3}`
  const userAgree = $('#userAgree').is(':checked')
  const serviceAgree = $('#serviceAgree').is(':checked')

  if(name === ''){
    alert('이름을 입력해주세요')
    return false
  } else if(tel1.length < 3 || tel2.length < 3 || tel3.length < 4 ){
    alert('핸드폰번호를 입력해주세요')
    return false
  } else if(userAgree === false){
    alert('개인정보 처리 방침에 동의해주세요')
    return false
  } else if(serviceAgree === false){
    alert('서비스 이용 약관에 동의해주세요')
    return false
  }


  /*
    api request parameter

    name: name,
    tel: tel,
  */
  const param = {"name" : name, "tel1" : tel1, "tel2" : tel2, "tel3" : tel3}
  $.ajax({
    type: "post",
    url : "/coupladm/Service/send_apply.php",
    data : param,
    dataType:"json",
    success : function(data, status, xhr) {
      alert("신청 되었습니다");
      location.reload();
      $.each(data.post_data, function (index, value) {

      });


    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.responseText);
    }
  });
}