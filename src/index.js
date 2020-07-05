const
    /** {@link https://nodejs.org/api/path.html Path Documentation} */
    Path = require("path"),
    /** {@link https://nodejs.org/api/fs.html File System Documentation} */
    Fs = require("fs"),
    /** {@link https://esprima.readthedocs.io/en/latest/ Esprima Documentation} */
    Esprima = require("esprima"),
    /** @type {String<application/javascript>} */
    program = Fs.readFileSync(Path.join(__dirname, "index.js")).toString();

// tokenized programm
exports.tokens = Esprima.tokenize(program, {
    range: false, // Annotate each token with its zero-based start and end location
    loc: false, // Annotate each token with its column and row-based location
    comment: false, // Include every line and block comment in the output
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