/* max 토글버튼 생성*/
const togglebtn =document.querySelector('.tooglebtn');
 const navs = document.querySelector('.index_allul');
 
 togglebtn.addEventListener('click',() =>{
    navs.classList.toggle('active');
 });

 
 const id = document.querySelectorAll(".hedermiddle");

 const ids = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
     if (entry.isIntersecting) {
       entry.target.classList.add("middle1");
     } else {
       entry.target.classList.remove("middle1");
     }
   });
 });
 
 id.forEach((hedermiddle) => {ids.observe(hedermiddle);
 });

 /* 해당 영역이 보일 때 나타내기*/
const contents = document.querySelectorAll(".content");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, options);

contents.forEach((content) => {observer.observe(content);
});


/* titles*/
/*
const titles = document.querySelectorAll('.alram_text');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');  
      } else {
        entry.target.classList.remove('show');  
      }
  });
};
const title = new IntersectionObserver(callback, {
  theshold: 0.5,
});
titles.forEach(project_title => observer.observe(project_title))
 */

//
const ios = {
 
  threshold:0,
};
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide');
    } else {
      entry.target.classList.remove('slide');
    }
  });                            
},ios);

document.querySelectorAll('.alram_main').forEach((alram_main) => io.observe(alram_main));

//
const mains = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide');
    } else {
      entry.target.classList.remove('slide');
    }
  });                            
},ios);
document.querySelectorAll('.onclick_main').forEach((onclick_main) => mains.observe(onclick_main));

const mains2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide');
    } else {
      entry.target.classList.remove('slide');
    }
  });                            
},ios);

document.querySelectorAll('.smartperfume_main').forEach((smartperfume_main) =>
   mains2.observe(smartperfume_main));
//

//project start

const projectstarts = document.querySelectorAll(".projectstart");

const articleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 });

projectstarts.forEach(projectstart => {
  articleObserver.observe(projectstart);
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