<img src='http://www.drewdahlman.com/portfolio/wp-content/uploads/2012/07/pinned1.png'>
##Pinned
A jQuery plugin for creating "pinned" or sticky elements on a page.

##Features
Quickly create pinned elements on page, also support mobile devices such as mobile safari.

##Use
<pre>
$("#element").pinned({
	bounds: '100px', // when to become sticky
	scrolling: '0px', // position during scroll
	mobile: false // should support mobile 
});
</pre>

##Callbacks
If you wish you can have callbacks in your code for when your element becomes pinned and unpinned.
<pre>
$("#element").pinned({
	bounds: '100px', // when to become sticky
	scrolling: '0px', // position during scroll
	mobile: false // should support mobile 
},function(){
	// PINNED
},
function(){
	// UNPINNED
});
</pre>

##Methods
`$("#element").pinned();`
`$("#element").unpin()`

##Unpin
Disables the pinned element.

##CSS
<pre>
#element {
	position: absolute;
	top: 100px;
}
</pre>

To use Pinned call the plugin by feeding your element selector, either ID or class, be sure to set your sticky element to position absolute!

##Notes
This plugin uses $(window).scroll() and calling unpin will unbind any scroll events that are current bound. Beware when using `$(window).bind('scroll');`
