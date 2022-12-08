let boxWidth =$('.box').outerWidth();
    $('.slid').animate({left:`-${boxWidth}`},1000)


$('#slidIcon').click(function(){
//    $('.box').css('display','block')
 let boxWidth =$('.box').outerWidth();
if($('.slid').css('left') == '0px'){
   
    $('.slid').animate({left:`-${boxWidth}`},1000)
}else{
    $('.slid').animate({left:'0px'},1000)
}

})
$('a[href^="#"]').click(function(e){
    let hrefLink=$(e.target).attr('href');
    let sectionOffset=$(hrefLink).offset().top;
    $('body , html').animate({scrollTop:sectionOffset},1000)
})

$('.singer').click(function(e){
   let attrValue= $(e.target).attr('data-contant');

    $(`.${attrValue}`).slideToggle(1000)

})
 
let timeCountDown= new Date('Jan 1, 2024 12:00:00').getTime();
console.log(timeCountDown);
let x = setInterval(function(){
    let now= new Date ().getTime();
    let distance = timeCountDown - now ;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    $('.day').text(`${days} D`);
    $('.hour').text(`${hours} H`);
    $('.min').text(`${minutes} M`);
    $('.sec').text(`${seconds} S`);
    

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "EXPIRED";
      }

},1000)

let textArea=document.getElementById('textarea');
console.log(textArea);
textArea.addEventListener('keyup',function(){
    let text = textArea.value;
    // console.log(text);
    let numLetter = 0;
    let currentLetter;
    for (let i = 0; i < text.length; i++) {
         currentLetter = text[i];
        // console.log(currentLetter);
    }
     numLetter = text.length;
        console.log(numLetter);
    if(currentLetter == ''){
        numLetter +=1 
    }

    let distanceOfTotal = 100 - numLetter;
    console.log(distanceOfTotal);

    
    $('#distanceOfTotal').text(distanceOfTotal)
 

})

