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

window.addEventListener('DOMContentLoaded', function() {
  showContent('Z');
  checkWindowSize(); // 초기 화면 크기 체크
});

// 화면 크기에 따라 콘텐츠 표시
window.addEventListener('resize', function() {
  checkWindowSize(); // 화면 크기 변경 시 체크
});

function checkWindowSize() {
  if (window.innerWidth <= 1194) {
    // 화면 너비가 950px 이하일 때는 모든 콘텐츠 보이기
    document.getElementById("contentZ").style.display = "flex";
    document.getElementById("contentA").style.display = "flex";
    document.getElementById("contentB").style.display = "flex";
    document.getElementById("contentC").style.display = "flex";
    document.getElementById("contentD").style.display = "flex";
    document.getElementById("contentE").style.display = "flex";
  } else {
    showContent('Z'); 
   }
}

function showContent(content) {
  var contentZ = document.getElementById("contentZ");
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");
  var contentC = document.getElementById("contentC");
  var contentD = document.getElementById("contentD");


  // 내용 숨김
  contentZ.style.display = "none";
  contentA.style.display = "none";
  contentB.style.display = "none";
  contentC.style.display = "none";
  contentD.style.display = "none";


  // 선택한 내용 보이기
  if (content === "Z") {
    contentZ.style.display = "flex";
  } else if (content === "A") {
    contentA.style.display = "flex";
  } else if (content === "B") {
    contentB.style.display = "flex";
  } else if (content === "C") {
    contentC.style.display = "flex";
  } else if (content === "D") {
    contentD.style.display = "flex";
  }
}
const openModalBtnZ = document.getElementById("button1Z");
const modalZ = document.getElementById("myModalZ");
const closeModalBtnZ = document.getElementById("closeModalBtnZ");
const modalImageZ = document.getElementById("modalImageZ");

// 버튼 클릭 시 모달 열기
openModalBtnZ.onclick = function() {
  modalZ.style.display = "block"; // 모달을 보이게 설정
}

// 닫기 버튼 클릭 시 모달 닫기
closeModalBtnZ.onclick = function() {
  modalZ.style.display = "none"; // 모달을 숨기게 설정
}

// 모달 밖을 클릭하면 모달 닫기
window.onclick = function(event) {
  if (event.target === modalZ) {
    modalZ.style.display = "none"; // 모달을 숨기게 설정
  }
};

    const openModalBtn = document.getElementById("button1A");
    const modalA = document.getElementById("myModalA");
    const closeModalBtn = document.getElementById("closeModalBtnA");
    const modalImage = document.getElementById("modalImageA");

    // 버튼 클릭 시 모달 열기
    openModalBtn.onclick = function() {
      modalA.style.display = "block"; // 모달을 보이게 설정
    }

    // 닫기 버튼 클릭 시 모달 닫기
    closeModalBtn.onclick = function() {
      modalA.style.display = "none"; // 모달을 숨기게 설정
    }

    // 모달 밖을 클릭하면 모달 닫기
    window.onclick = function(event) {
      if (event.target === modalA) {
        modalA.style.display = "none"; // 모달을 숨기게 설정
      }
    };

    const openModalBtnB = document.getElementById("button1B");
    const modalB = document.getElementById("myModalB");
    const closeModalBtnB = document.getElementById("closeModalBtnB");
    const modalImageB = document.getElementById("modalImageB");

    // 버튼 클릭 시 모달 열기
    openModalBtnB.onclick = function() {
      modalB.style.display = "block"; // 모달을 보이게 설정
    }

    // 닫기 버튼 클릭 시 모달 닫기
    closeModalBtnB.onclick = function() {
      modalB.style.display = "none"; // 모달을 숨기게 설정
    }

    // 모달 밖을 클릭하면 모달 닫기
    window.onclick = function(event) {
      if (event.target === modalB) {
        modalB.style.display = "none"; // 모달을 숨기게 설정
      }
    };
    
 
    const openModalBtnC = document.getElementById("button1C");
    const modalC = document.getElementById("myModalC");
    const closeModalBtnC = document.getElementById("closeModalBtnC");
    const modalImageC = document.getElementById("modalImageC");

    // 버튼 클릭 시 모달 열기
    openModalBtnC.onclick = function() {
      modalC.style.display = "block"; // 모달을 보이게 설정
    }

    // 닫기 버튼 클릭 시 모달 닫기
    closeModalBtnC.onclick = function() {
      modalC.style.display = "none"; // 모달을 숨기게 설정
    }

    // 모달 밖을 클릭하면 모달 닫기
    window.onclick = function(event) {
      if (event.target === modalC) {
        modalC.style.display = "none"; // 모달을 숨기게 설정
      }
    };

    const openModalBtnD = document.getElementById("button1D");
    const modalD = document.getElementById("myModalD");
    const closeModalBtnD = document.getElementById("closeModalBtnD");
    const modalImageD = document.getElementById("modalImageD");

    // 버튼 클릭 시 모달 열기
    openModalBtnD.onclick = function() {
      modalD.style.display = "block"; // 모달을 보이게 설정
    }

    // 닫기 버튼 클릭 시 모달 닫기
    closeModalBtnD.onclick = function() {
      modalD.style.display = "none"; // 모달을 숨기게 설정
    }

    // 모달 밖을 클릭하면 모달 닫기
    window.onclick = function(event) {
      if (event.target === modalD) {
        modalD.style.display = "none"; // 모달을 숨기게 설정
      }
    };
    

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