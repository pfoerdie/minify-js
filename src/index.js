const
    Path = require("path"),
    Fs = require("fs"),
    Esprima = require("esprima"),
    program = Fs.readFileSync(Path.join(__dirname, "index.js")).toString();

// tokenized programm
exports.tokens = Esprima.tokenize(program, {
    range: false, // Annotate each token with its zero-based start and end location
    loc: false, // Annotate each token with its column and row-based location
    comment: true, // Include every line and block comment in the output
});

// parsed common js
exports.script = Esprima.parseScript(program, {
    jsx: false, // Support JSX syntax
    range: false, // Annotate each node with its index-based location
    loc: false, // Annotate each node with its column and row-based location
    tolerant: false, // Tolerate a few cases of syntax errors
    tokens: false, // Collect every token
    comment: false, // Collect every line and block comment
});

// parsed es6 module
exports.module = Esprima.parseModule(program, {
    jsx: false, // Support JSX syntax
    range: false, // Annotate each node with its index-based location
    loc: false, // Annotate each node with its column and row-based location
    tolerant: false, // Tolerate a few cases of syntax errors
    tokens: false, // Collect every token
    comment: false, // Collect every line and block comment
});