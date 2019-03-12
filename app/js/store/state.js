let username = '未登录';
let goodsObject = {
    img: "",
    title: "",
    price: "",
};
let goodsList = [];
try {
    if (localStorage.username) {
        username = localStorage.username;
    }

} catch (e) {

}
try {
    if (localStorage.goods) {

        console.log(JSON.parse(localStorage.getItem("goods")))
        goodsList = JSON.parse(localStorage.getItem("goods"));
        console.log(goodsList)
    }
} catch (error) {
    console.log(error)

}

export default {
    username: username,
    goodsObject: goodsObject,
    goodsList: goodsList
}