Here is the generated README.md file for the "Lexer" project:

# Lexer
================

Overview
--------

The Lexer project is a JavaScript-based lexical analyzer that tokenizes input text files and identifies the type of each token. It supports various token types, including keywords, assignment operators, logical operators, arithmetic operators, string constants, real constants, integer constants, symbols, and identifiers.

Main Features
-------------

* Tokenizes input text files
* Identifies token types using regular expressions
* Supports various token types
* Writes tokenized output to a file

Installation
------------

To install the Lexer project, clone the repository and navigate to the project directory.

Dependencies
------------

The project depends on the `fs` module, which is a built-in Node.js module. No additional dependencies need to be installed.

Usage
-----

To use the Lexer project, simply run the `lexer.js` file using Node.js. The script will read from a file named `words.txt` and write the tokenized output to a file named `JETONS.txt`.

Example
-------

Create a file named `words.txt` with the following content:
```
program x := 5;
if x > 5 then
  begin
    x := x + 1;
  end;
```
Run the `lexer.js` file using Node.js:
```
node lexer.js
```
This will generate a file named `JETONS.txt` with the tokenized output.

Key Files
---------

* `lexer.js`: The main script that tokenizes the input file and identifies token types.
* `README.md`: This file, which provides an overview of the project and usage instructions.

Project Structure
----------------

The project consists of a single JavaScript file, `lexer.js`, and this README file.

Contributing
------------

Contributions are welcome! If you'd like to contribute to the Lexer project, please fork the repository and submit a pull request.

License
-------

The Lexer project is licensed under the MIT License. See the LICENSE file for details.