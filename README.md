<div id="mainContainer">
	<div id="mainContent">
		<h1>jQuery Collapser</h1>
		<h2>Demo page</h2>
		<div id="instructions">
			
			<p>Simple to use: call the .Collapser() method on one or more HTML elements which will now listen for clicks to expand/collapse the next div. There is no need for plugin specific class names, and you can set the "open" class name in the Collapser options (it will default to "cOpen" if not set).</p>
			
			<p>Other options include anim
				ate (Boolean), speed (String), fade (Boolean). Have any suggestions? <a href="mailto:bryanmytko@gmail.com">Email me!</a> </p>
			
			<p>If you wish for sections to be open on page load, just give them the "cOpen" class, or whatever class you chose in the settings to override "cOpen".</p>
			
			<p>There are no CSS requirements. I personally hate plugins that are bogged down with convoluted CSS that takes forever to change and fit the style of <em>your</em> website. However, feel free to use my CSS as a guide.</p>
			
			<p>This is cross browser compatible, tested in Chrome, Firefox, Opera and IE7+. I built this after losing time using <a href="http://webcloud.se/jQuery-Collapse/">jQuery Collapse</a>, due to its claim to be 'fully tested in IE6+', even though their entire page of examples completely falls apart in IE7/8.</p>
			
			<p>Example Javascript:
				<pre>
	&lt;script&gt;
	$(document).ready(function(){
		$('div.collapserBar').Collapser({
		  	openClass: 'myOpenClassName',
			animate: true,
			speed: 'fast',
			fade: true
	  });
	});
	&lt;/script&gt;</pre>
			</p>
			<p>Example HTML:
				<pre>
	&lt;div class="collapserBar"&gt;
	&nbsp; &lt;h3&gt;Content Area #1&lt;/h3&gt;
	&lt;/div&gt;
	&lt;div&gt;
	  &lt;p&gt;Hello!&lt;/p&gt;
	&lt;/div&gt;</pre>
	</p>
		
		</div>	
	</div>
</div>