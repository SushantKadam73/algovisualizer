/*! stringmatchvisualiser 2019-05-13 */
define(["naive","kmp"],function(a,b,c,d){var e={naive:function(b,c){return a(b,c)},kmp:function(a,c){return b(a,c)},simpleboyermoore:function(a,b){return c(a,b)},boyermoore:function(a,b){return d(a,b)}};return{list:[["naive","Naive"],["kmp","KMP"]],run:function(a,b,c){return e[a](b,c)}}});