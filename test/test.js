var yieldflow = require('../index');
var assert = require('assert');

function login(username, password, callback) {
    assert(username);
    assert(password);
    assert(callback);
    setTimeout(()=>callback(0), 1000);
}

function sendmsg(msg, callback) {
    assert(msg);
    setTimeout(()=>callback(msg), 500);
}

yieldflow(function* (next){
    var code = yield login('user', '123', (code)=>{
        next(code);
    });
    console.log('login: ' + code);

    var sendText = yield sendmsg('xxx', (text)=>{
        next(text);
    });
    console.log('send: ' + sendText);

    sendText = yield sendmsg('fuck', (text)=> {
        next(text);
    });
    console.log('send: ' + sendText);
});