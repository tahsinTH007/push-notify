const NotifyEle = document.querySelector('.notify')
const BtnEle = document.querySelector('.btn')

BtnEle.addEventListener("click" ,Active)

function Active() {
    var add = Number(NotifyEle.getAttribute('data-count') || 0)
    NotifyEle.setAttribute('data-count', add + 1)
    if(add === 0){
        NotifyEle.classList.add('add-num')
    }
    false;
}

