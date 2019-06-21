var initialState = [
    {
        id: 1,
        name: "Samsung Galaxy S10+ 128GB Bạc Đa Sắc",
        image: "https://cdn.tgdd.vn/Products/Images/42/203207/samsung-galaxy-s10-plus-128gb-bac-da-sac-400x400.jpg",
        price: 23990000
    },
    {
        id: 2,
        name: "iPhone Xs 256GB",
        image: "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
        price: 13990000
    },
    {
        id: 3,
        name: "OPPO R17 Pro",
        image: "https://cdn.tgdd.vn/Products/Images/42/186395/oppo-r17-pro-14-400x400.jpg",
        price: 3990000
    },
]

const products = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;