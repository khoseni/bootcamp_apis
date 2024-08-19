// wordFunctions.test.js

import assert from "assert";
import { longestWord, shortestWord, wordLengths } from "../wordgame.js"; // Adjust the path as needed

describe('The wordFunctions Module', function () {

    describe('The longestWord Function', function () {
        it('should return "longest" for input "the longest word"', function () {
            assert.equal('longest', longestWord('the longest word'));
        });

        it('should return "word" for input "shortest word"', function () {
            assert.equal('shortest', longestWord('shortest word'));
        });

        it('should return "word" for input "word"', function () {
            assert.equal('word', longestWord('word'));
        });

        it('should return an empty string for input ""', function () {
            assert.equal('', longestWord(''));
        });
    });

    describe('The shortestWord Function', function () {
        it('should return "the" for input "the longest word"', function () {
            assert.equal('the', shortestWord('the longest word'));
        });

        it('should return "a" for input "this is a test"', function () {
            assert.equal('a', shortestWord('this is a test'));
        });

        it('should return "a" for input "a"', function () {
            assert.equal('a', shortestWord('a'));
        });

        it('should return an empty string for input ""', function () {
            assert.equal('', shortestWord(''));
        });
    });

    describe('The wordLengths Function', function () {
        it('should return 14 for input "the longest word"', function () {
            assert.equal(14, wordLengths('the longest word'));
        });

        it('should return 11 for input "this is a test"', function () {
            assert.equal(11, wordLengths('this is a test'));
        });

        it('should return 4 for input "word"', function () {
            assert.equal(4, wordLengths('word'));
        });

        it('should return 0 for input ""', function () {
            assert.equal(0, wordLengths(''));
        });
    });

});
