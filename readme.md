# yieldflow
> Asynchronous becomes synchronous with the yield

## Usage

```
var yieldflow = require('yieldflow');

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

```

result print:

```
login: 0
send: xxx
send: fuck
```

`login` and `sendmsg` is two asyns function.

`yeildflow` pass a next function to you, you will call `next(result)` in the async function callback to return the result to yield operation (`var code = yield login(...);`) and move one step.

Have fun.

## License

MIT: http://rem.mit-license.org