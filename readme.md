##Pinned
A jQuery plugin for creating "pinned" or sticky elements on a page.

##Features
Quickly create pinned elements on page, also support mobile devices such as mobile safari.

##Use
<pre>
$("#element").pinned({
	bounds: '100px', // when to become sticky
	scrolling: '110px', // position during scroll
	mobile: false // should support mobile 
});
</pre>

##CSS
<pre>
#element {
	position: absolute;
	top: 100px;
}
</pre>

To use Pinned call the plugin by feeding your element selector, either ID or class, be sure to set your sticky element to position absolute!
