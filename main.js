$popupBtn = document.getElementById('btn-popup')
$popup = document.getElementById('popup__overlay')
$popupCloseBtn = document.getElementById('close')

$popupBtn.addEventListener('click', ()=>{
    $popup.classList.add('active')
})


$popupCloseBtn.addEventListener('click', ()=>{
    $popup.classList.remove('active')
})
