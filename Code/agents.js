$(function(){
    var slides=$('.show-agents')
    slides.hide()

    var currIdx=0;
    var minIdx=0;
    var maxIdx=slides.length-1

    slides.eq(currIdx).show()

    $('.prev-button').click(()=>{
        slides.eq(currIdx).hide()
        currIdx-=1
        if(currIdx < minIdx){
            currIdx=maxIdx
        }
        slides.eq(currIdx).fadeIn()
    })

    $('.next-button').click(()=>{
        slides.eq(currIdx).hide()
        currIdx+=1
        if(currIdx>maxIdx){
            currIdx=minIdx
        }
        slides.eq(currIdx).fadeIn()
    })
})