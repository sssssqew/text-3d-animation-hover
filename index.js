const menuItems = [...document.querySelectorAll('.menu-item')]

menuItems.forEach(item => {
    let word = item.firstElementChild.firstElementChild.innerText.split('')
    item.firstElementChild.innerHTML = '' // div
    console.log(word)

    word.forEach((letter, idx) => {
        item.firstElementChild.innerHTML += `<span style='--index:${idx}'>${letter}</span>`
    })
    // cloneDiv 는 호버하면 내려옴
    let cloneDiv = item.firstElementChild.cloneNode(true) // div 복제
    cloneDiv.style.position = 'absolute' /* menu-item 기준 */
    cloneDiv.style.left = '0'
    cloneDiv.style.top = '0'
    item.appendChild(cloneDiv)
})


// 호버시 일어나는 애니메이션 
// 첫번째 div 는 위로 올라가면서 (0 -> -100%) 화면 뒤로 회전한다 (0 -> -90)
// 두번째 div 는 위로 올라가면서 (100% -> 0) 화면 앞으로 회전한다 (90 -> 0)