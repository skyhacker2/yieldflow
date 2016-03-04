module.exports = function(generate, context) {
    var gen = null;
    generate = generate.bind(context, function(result) {
        gen.next(result);
    });
    var gen = generate();
    gen.next();
}