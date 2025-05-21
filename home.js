/* max 토글버튼 생성*/
const togglebtn =document.querySelector('.tooglebtn');
const navs = document.querySelector('.index_all');
const closebtn = document.querySelector('.close')
const navLinks = document.querySelectorAll('.index_allul li a');
 togglebtn.addEventListener('click',() =>{
    navs.classList.toggle('active');
 });
 closebtn.addEventListener('click', () => {
  navs.classList.remove('active');
});
 
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // 링크의 기본 동작 (페이지 이동) 방지
    const targetSection = document.querySelector(link.getAttribute('href')); // 링크의 href에 해당하는 섹션

    // 섹션으로 스크롤 애니메이션
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // 메뉴 닫기
    navs.classList.remove('active');
  });
});
 
 /*해당 영역이 보일 때 나타나는 애니메이션*/ 
 const id = document.querySelectorAll(".abouttext");
 const abouts = {
  threshold:0.5
 };

 const ids = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add("show");
     } else {
        
     }
   });
 },abouts);
 
 id.forEach((abouttext) => {ids.observe(abouttext);
 });

 const sub = document.querySelectorAll(".aboutsub");
 const aboutsub = {
  threshold:0.3
};

 const subs = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add("show");
     } else {
       entry.target.classList.remove("show");
     }
   });
 },aboutsub);
 
 sub.forEach((aboutsub) => {subs.observe(aboutsub);
 });


$(document).ready(function() { 

  // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.topbtn').fadeIn();
      }else{
        $('.topbtn').fadeOut();
      }
  });
  
  // Top 버튼 클릭시 페이지 상단으로 이동
   $('.topbtn').click(function(){
    $('html, body').animate({scrollTop : 0}, 500);
      return false;
  });
  
});
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 해당 요소가 화면에 보이면 active 클래스 추가
      entry.target.classList.add('active');
       
    }else{
      entry.target.classList.remove('active')
    }
  });
}, { threshold: 0.5 }); // 50% 이상 보이면 애니메이션 시작

const profileElements = document.querySelectorAll('.profile_all, .myimg');
profileElements.forEach(element => {
  observer.observe(element);
});
 
    // 디자인 이미지 클릭 시 모달 열기
  const designLinks = document.querySelectorAll('.designimgA, .designimgB, .designimgC');
  const desmodal = document.getElementById('desmyModal');
  const desmodalImage = document.getElementById('desmodalImage');
  const descloseModalBtn = document.getElementById('descloseModalBtn');

  designLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 동작 방지
      const imgSrc = this.querySelector('img').src;
      desmodalImage.src = imgSrc; // 모달에 이미지 설정
      desmodal.style.display = 'block'; // 모달을 보이게 설정
  
      const modalContentContainer = desmodal.querySelector('.desmodal-content-container');
      modalContentContainer.scrollTop = 0;  // 스크롤 초기화
    });
  });

  // 닫기 버튼 클릭 시 모달 닫기
  descloseModalBtn.onclick = function() {
    desmodal.style.display = "none"; // 모달 숨기기
  };

  // 모달 밖을 클릭하면 모달 닫기
  window.onclick = function(event) {
    if (event.target === desmodal) {
      desmodal.style.display = "none"; // 모달 숨기기
    }
  };
  desmodal.addEventListener('transitionend', function() {
  if (desmodal.style.display === "none") {
    const modalContentContainer = desmodal.querySelector('.desmodal-content-container');
    modalContentContainer.scrollTop = 0; // 모달이 닫혔을 때 스크롤을 맨 위로 설정
  }
});

document.getElementById('copyText').addEventListener('click', function() {
  // 텍스트 영역 생성
  const text = document.getElementById('copyText').innerText;
  
  // 임시 텍스트 영역 생성
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select(); // 텍스트 선택
  document.execCommand('copy'); // 텍스트 복사
  document.body.removeChild(textarea); // 임시 텍스트 영역 삭제
  
  // 복사 완료 메시지
  alert('텍스트가 복사되었습니다!');
});

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      // contact_mail에 파도타기 효과 실행 (1회만)
      if (entry.target.id === 'contactMail' && !entry.target.classList.contains('animated')) {
        waveTextAnimation(document.getElementById('copyText'));
        entry.target.classList.add('animated');
      }
    }
  });
}, {
  threshold: 0.8
});

// .hidden 클래스가 있는 요소 감지 시작
document.querySelectorAll('.hidden').forEach(el => scrollObserver.observe(el));

// 파도타기 텍스트 애니메이션 함수
function waveTextAnimation(element) {
  const text = element.innerText;
  element.innerHTML = ''; // 초기화

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.05}s`;
    element.appendChild(span);
  });

  element.classList.add('wave');
}



document.addEventListener("DOMContentLoaded", function () {
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // 더 이상 감지할 필요 없으면 해제
        galleryObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  const gallerySection = document.getElementById('staggeredGallery');
  if (gallerySection) {
    galleryObserver.observe(gallerySection);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const miniGallery = document.getElementById("miniGallery");

  const minGalleryWatcher = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("minimg-show");
        entry.target.classList.remove("minimg-hidden");
        minGalleryWatcher.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.3
  });

  if (miniGallery) {
    minGalleryWatcher.observe(miniGallery);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const miniGalleryX = document.getElementById("miniGalleryX");

  const miniXWatcher = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("minimgX-show");
        entry.target.classList.remove("minimgX-hidden");
        miniXWatcher.unobserve(entry.target); // 한 번만 실행되게
      }
    });
  }, {
    threshold: 0.3 // 요소가 30% 정도 보이면 실행
  });

  if (miniGalleryX) {
    miniXWatcher.observe(miniGalleryX);
  }
});