



// // fix-btn top 배경색 변경
// 버튼에서 마우스를 누를때
$('.fix-btn .btn-fix.top').mousedown(function() {
    $(this).addClass('active');
});
// 버튼에서 마우스를 뗄때
$('.fix-btn .btn-fix.top').mouseup(function() {
    $(this).removeClass('active');
});

// fix-btn top 맨 위 페이지로 이동
$('.btn-fix.top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})




// fix-btn setting 누르면 나옴
$('.btn-fix.setting').click(function(){
    $('.setting-area').toggleClass('show');
})

// fix-btn setting 배경색 변경
$('.fix-btn .btn-fix.setting').mousedown(function() {
    $(this).toggleClass('active');
});





