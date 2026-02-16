let list = document.querySelectorAll('.item') //Pegando todos os elmento coma class 'item '
let btn_prev = document.querySelector('.prev') // Pegando o btn prev
let btn_next = document.querySelector('.next') // Pegando o btn next


// Pegando o tamanho ou quantidade dos itens
let count_item = list.length

// Item que esta activo
let item_active = 0
console.log(list)

//Adicionando click no btn next, botao a direita
btn_next.addEventListener('click',()=>{
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    item_active = item_active >= count_item -1 ? 0 : item_active + 1
    /* ADICIONANDO A CLASS ACTIVE NO PROXIMO ITEM*/
    list[item_active].classList.add('active')
})

//Adiconando click no btn prev, botao a esquerda
btn_prev.addEventListener('click', ()=>{
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')


    item_active = item_active <= 0 ? count_item -1  : item_active - 1
    /* ADICIONANDO A CLASS ACTIVE NO PROXIMO ITEM*/
    list[item_active].classList.add('active')

})