<img src='http://www.drewdahlman.com/portfolio/wp-content/uploads/2012/07/pinned1.png'>
##Pinned
A jQuery plugin for creating "pinned" or sticky elements on a page.

##Example & Project page
http://drewdahlman.github.com/Pinned/

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
	bounds: 100, // when to become sticky
	scrolling: 0, // position during scroll
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

##CSS
<pre>
#element {
	position: absolute;
	top: 100px;
}
</pre>

To use Pinned call the plugin by feeding your element selector, either ID or class, be sure to set your sticky element to position absolute!

##TODO
- Add better support for touch movements.
