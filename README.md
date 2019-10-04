# Heck Reset
A customizable reset that makes it easy to choose your own opinionated styles!

## Purpose & Methods
This project takes inspiration from a blog article on [bitsofcode](https://bitsofco.de/a-look-at-css-resets-in-2018/) that discusses the purpose of a CSS Reset. The article claims that a CSS Reset has 3 goals: 

1. Correct user agent style errors (Like IE)
2. Undo inconsistent opinionated user agent styles
3. Create a consistent opinionated style base

Heck Reset solves points 1 and 2 with a modified version of [Normalize.css](https://github.com/necolas/normalize.css), [Marx.css](https://github.com/mblode/marx), and [Sanitize.css](https://github.com/csstools/sanitize.css).

To solve point 3, it uses customizable `!default` SCSS variables.

## Special Thanks
- [bitsofcode](https://bitsofco.de/a-look-at-css-resets-in-2018/), the article that inspired this project
- [jkorpela.fi](http://jkorpela.fi/www/testel.html), the HTML doc that shows how all the elements are displayed. This is instrumental to testing the effects of a CSS reset.
