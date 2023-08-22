
const textArea = document.getElementById('text-area-value');

document.getElementById('bold-btn').addEventListener('click',function(){
    const btn = true;

    if(textArea.style.fontWeight === 'bold'){
        textArea.style.fontWeight = 'normal';
    }else{
        textArea.style.fontWeight = 'bold';
    }
})
document.getElementById('italic-btn').addEventListener('click',function(){
    if(textArea.style.fontStyle === 'italic'){
        textArea.style.fontStyle = 'normal'
    }else{
        textArea.style.fontStyle = 'italic'
    }
})
document.getElementById('underline-btn').addEventListener('click',function(){
    if(textArea.style.textDecoration === 'underline'){
        textArea.style.textDecoration = 'solid';
    }else{
        textArea.style.textDecoration = 'underline';
    }
})
document.getElementById('text-left-btn').addEventListener('click',function(){
    textArea.style.textAlign = 'left';
})
document.getElementById('text-center-btn').addEventListener('click',function(){
    textArea.style.textAlign = 'center';
})
document.getElementById('text-right-btn').addEventListener('click',function(){
    textArea.style.textAlign = 'right';
})
document.getElementById('text-justify-btn').addEventListener('click',function(){
    textArea.style.textAlign = 'justify';
})
// --------------------last site---------------

document.getElementById('text-size-btn').addEventListener('input',function(){
    const number =document.getElementById('text-size-btn').value;
    const numberConvert = parseInt(number);
    const multiplysize = numberConvert * 7;
    if(numberConvert > 2 && numberConvert < 16){
        textArea.style.fontSize = `${multiplysize}px`
    }
    // console.log(number);
})

document.getElementById('case-btn').addEventListener('click',function(){
    if(textArea.style.textTransform === 'lowercase'){
        textArea.style.textTransform = 'capitalize'
    }else if(textArea.style.textTransform === 'capitalize'){
        textArea.style.textTransform = 'uppercase'
    }else{
        textArea.style.textTransform = 'lowercase'
    }
})

document.getElementById('color-btn').addEventListener('input',function(){
    const colour = document.getElementById('color-btn').value;
    textArea.style.color = colour;
})
