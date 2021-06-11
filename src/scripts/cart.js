class Cart{
constructor(){
    this.items = []
    this.quantityMax = 5
}

empty(){
    this.items = []

}
add(item){
    const foundItem = this.items.find(t => t.id == item.id)

            if (foundItem){
                if ( foundItem.quantity < this.quantityMax ) {
                    foundItem.increment()
                }

            }else{
                this.items.push(item)
            }
    

     }
     removeItemId(id){
       this.items = this.items.filter((item)=> item.id != id)
       
     }
     totalCPrice() {
       return Math.round(this.items.reduce(
           (total, currentItem) => total + currentItem.totalPrice(),
           0
       )* 100) / 100
        //  let total = 0
        //  this.items.forEach(item => {
        //      total += item.totalPrice()
        //  })
        //  return total
     }
}

export default Cart