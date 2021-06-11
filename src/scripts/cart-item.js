class CartItem{
      constructor({id, title, price, quantity = 1}){
          this.id = id
          this.title = title
          this.price = price
          this.quantity = quantity
      }
      totalPrice(){
          return this.price * this.quantity 
      }

      increment(n=1){
          this.quantity += n
      }
}

export default CartItem
