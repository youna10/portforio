/* max 토글버튼 생성*/
const togglebtn =document.querySelector('.tooglebtn');
const navs = document.querySelector('.index_all');
const closebtn = document.querySelector('.close')
 
 togglebtn.addEventListener('click',() =>{
    navs.classList.toggle('active');
 });
 closebtn.addEventListener('click', () => {
  navs.classList.remove('active');
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
       entry.target.classList.remove("show");
     }
   });
 },abouts);
 

 id.forEach((abouttext) => {ids.observe(abouttext);
 });

 const sub = document.querySelectorAll(".aboutsub");
 const aboutsub = {
  threshold:0.7
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
window.addEventListener('DOMContentLoaded', function() {
  showContent('A');
  checkWindowSize(); // 초기 화면 크기 체크
});

// 화면 크기에 따라 콘텐츠 표시
window.addEventListener('resize', function() {
  checkWindowSize(); // 화면 크기 변경 시 체크
});

function checkWindowSize() {
  if (window.innerWidth <= 950) {
    // 화면 너비가 950px 이하일 때는 모든 콘텐츠 보이기
    document.getElementById("contentA").style.display = "flex";
    document.getElementById("contentB").style.display = "flex";
    document.getElementById("contentC").style.display = "flex";
    document.getElementById("contentD").style.display = "flex";
    document.getElementById("contentE").style.display = "flex";
  } else {
    // 화면 너비가 950px 초과일 때는 선택된 콘텐츠만 보이도록 설정
    showContent('A'); // 기본적으로 'A'를 보이게 설정
  }
}

function showContent(content) {
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");
  var contentC = document.getElementById("contentC");
  var contentD = document.getElementById("contentD");


  // 내용 숨김
  contentA.style.display = "none";
  contentB.style.display = "none";
  contentC.style.display = "none";
  contentD.style.display = "none";


  // 선택한 내용 보이기
  if (content === "A") {
    contentA.style.display = "flex";
  } else if (content === "B") {
    contentB.style.display = "flex";
  } else if (content === "C") {
    contentC.style.display = "flex";
  } else if (content === "D") {
    contentD.style.display = "flex";
  } 
}
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
  const designLinks = document.querySelectorAll('.designimgA, .designimgB');
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