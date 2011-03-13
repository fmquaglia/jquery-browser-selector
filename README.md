jQuery Browser Selector - The solution for special selectors
-------------------------

This jQuery plugin add automatically special classes in the HTML tag according the Operational System, Browser, Browser version and Browser Screen Resolution. So, now you can easily create styles/scripts for each combination. Ex:

CSS:
<code>
html{
	background: #FFF;
}

/*Only for IE7*/
html.ie-7{
	background: red;
}

/*Only for mac users in screen resolution 1650x1080*/
html.mac.screen-1680{
	background: gray;
}
</code>

JS:
<code>
if($('html').hasClass('safari')){
	alert('This browser is Safari');
}
</code>

Download and insert this script in your page/project. Now go to developer!

Build
------------

To build you need NodeJS + NPM + JSMin package. With this in hands go to terminal and run:
<code>
node Makefile.js
</code>