import toast from "react-hot-toast"


const allAddToCart = () => {
    const allCart = localStorage.getItem('addtocart')

    if (allCart) {
        const addtocart1 = JSON.parse(allCart)
        console.log(addtocart1)
        return addtocart1
    }
    else {
        return []
    }
}
const allAddToWishlist = () => {
    const allWishlist = localStorage.getItem('addtoWishlist')

    if (allWishlist) {
        const addtoWishlist1 = JSON.parse(allWishlist)
        return addtoWishlist1
    }
    else {
        return []
    }
}

const AddToWishlist = (gadgets2) => {
    const addtoWishlist = allAddToWishlist();
    // console.log(addtoWishlist)
    const isExist = addtoWishlist.find((gadget2) => gadget2.product_id === gadgets2.product_id)
    if (isExist) {
        toast.error('This product is already exist!');
        return;
    }
    addtoWishlist.push(gadgets2)
    localStorage.setItem('addtoWishlist', JSON.stringify(addtoWishlist))
    toast.success('Successfully added');
}
const AddToCart = (gadgets1) => {
    const addtocart = allAddToCart();
    const isExist = addtocart.find((gadget) => gadget.product_id === gadgets1.product_id)
    if (isExist) {
        toast.error('This product is already exist!');
        return;
    }
    addtocart.push(gadgets1)
    localStorage.setItem('addtocart', JSON.stringify(addtocart))
    toast.success('Successfully added');
}
const removecart = (id) =>{
    const addtocart = allAddToCart();
    const remained = addtocart.filter((gadgets1) => gadgets1.product_id !== id)
    localStorage.setItem('addtocart', JSON.stringify(remained))
    toast.success('Successfully removed');
}
const removeWishlist = (id) =>{
    const addtoWishlist = allAddToWishlist();
    const remained = addtoWishlist.filter((gadgets1) => gadgets1.product_id !== id)
    localStorage.setItem('addtoWishlist', JSON.stringify(remained))
    toast.success('Successfully removed');
}

export { AddToCart, allAddToCart, removecart, removeWishlist, allAddToWishlist, AddToWishlist }