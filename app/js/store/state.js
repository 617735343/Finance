let username = '未登录';
try {
    if(localStorage.username) {
        username = localStorage.username;
    }
}catch (e) {
    
}

export default {
    username: username
}