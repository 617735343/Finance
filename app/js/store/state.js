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
        goodsList = goodsList.push(JSON.price(localStorage.getItem("goods")));
    }
} catch (error) {

}

export default {
    username: username,
    goodsObject: goodsObject,
    goodsList: goodsList
}