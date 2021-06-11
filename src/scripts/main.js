import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 實作寫在這裡！
import Cart from './cart'
import CartItem from './cart-item'
import {buildItemList} from './ui'

const cccart = new Cart()

const renderUI = () => {
    const result = buildItemList(cccart)
    document.querySelector('.cart tbody').innerHTML = result
    // 
    document.querySelectorAll('.remove-item-btn').forEach(btn =>{
      btn.addEventListener('click',(e) =>{
        cccart.removeItemId(e.currentTarget.dataset['id'])
        renderUI()
      })
    })

    document.querySelectorAll('.quantity').forEach(btn =>{
      btn.addEventListener('input', (e) => {
        // 1. get quantity number
        const quantity = Number(e.currentTarget.value)
        // 2. found cart item and set quantity
        const itemID = e.currentTarget.dataset['id']
        const foundItem = cccart.items.find(item => item.id === itemID)
        if (foundItem) {
          foundItem.quantity = quantity
          // if quantity == 0 then remove cart item
          if (foundItem.quantity === 0) {
            cccart.removeItemId(foundItem.id)
          } 
          renderUI()
        }
      })
    })

    document.querySelector('.cart .total-price').textContent = '$' +cccart.totalCPrice()
}

const addToCart = btn =>{
  btn.addEventListener('click',(e)=> {
    const card = e.currentTarget.parentElement.parentElement
    const title = card.querySelector('.card-title').textContent
    const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''))
    const id = card.dataset['productId']
    // 加到購物車
    const item = new CartItem({id, price:price, title:title})
    cccart.add(item)

    renderUI()
  })
}

document.addEventListener('DOMContentLoaded', ()=> {
  const  buttons = document.querySelectorAll('.card .btn')
  buttons.forEach(btn => addToCart(btn))

  document.querySelector('.empty-cart').addEventListener('click', () =>{
    cccart.empty()
    renderUI()
  })



  renderUI()
})
    



  
  