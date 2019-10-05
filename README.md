# Heck Reset
A customizable reset that makes it easy to choose your own opinionated styles!

## Purpose & Methods
This project takes inspiration from a blog article on [bitsofcode](https://bitsofco.de/a-look-at-css-resets-in-2018/) that discusses the purpose of a CSS Reset. The article claims that a CSS Reset has 3 goals: 

1. Correct user agent style errors (Like IE)
2. Undo inconsistent opinionated user agent styles
3. Create a consistent opinionated style base

Heck Reset solves points 1 and 2 with a modified version of [Normalize.css](https://github.com/necolas/normalize.css), [Marx.css](https://github.com/mblode/marx), and [Sanitize.css](https://github.com/csstools/sanitize.css).

To solve point 3, it uses customizable `!default` SCSS variables.

## Usage
To use this reset, you have several options. 

1. You can download the `dist/css/heck-reset.css` file and `<link>` it in your HTML.
    - Cannot customize at all. This will only give you Heck-Reset's default styles.
        ```html
        <link rel="stylesheet" href="heck-reset.css">
        ```
2. You can include the SCSS in your project.
    - You can customize the reset by creating a variable override file and including it before Heck-Reset.
        1. Create a variable override file.
        ```scss
        // variable overrides scss file
        $link-color: #7777ff;
        ...
        ```
        2. Include heck-reset.scss and variable-overrides in your project.
        ```scss
        // Your Project's SCSS
        import 'variable-overrides';
        import 'heck-reset.scss';
        ```
        3. Now you've got custom styles!


## Demo / Testing
Check out the default demo [here](https://julian-hecker.github.io/heck-reset/test.html) \(Test HTML page from [jkorpela.fi](http://jkorpela.fi/www/testel.html)\)

## Special Thanks
- [bitsofcode](https://bitsofco.de/a-look-at-css-resets-in-2018/), the article that inspired this project
- [Jukka Korpela](http://jkorpela.fi/www/testel.html), who made the test HTML document that shows how elements are rendered.
