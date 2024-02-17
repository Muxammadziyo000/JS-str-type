var Elinp = document.querySelector('.inp')
function fn(){
    var num1 =Elinp.value 
    if (num1 == num1.toUpperCase()){
        console.log('hammasi katta harif')
    }else{
        console.log('ichida kichkina harif yoki son bor')
    }

    if(num1[0] == ' '){
        console.log('boshida probel bor')
    }else{
        console.log('boshida probel yoq')
    }
}