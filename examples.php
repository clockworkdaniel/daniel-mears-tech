<?php include 'header.php'; ?>

<section class="content-area">
	<div class="examples-content">
		<p class="pull-out-copy trigger-on-scroll">Here are some examples of my work</p>
		<ul class="examples-list">
			<li class="examples-item--large-left trigger-on-scroll">
				<a class="examples-item__link" href="#">
					<img class="examples-item__image" src="#">
				</a>
				<div class="examples-item__copy">
					<h2 class="examples-item__title">This Website!</h2>
					<p>You probably know what it is because you're on it...</p>
					<ul>
						<li>GSAP Javascript Animation</li>
						<li>History Manipulation with History API</li>
						<li>JS Promises</li>
						<li>Custom Vanilla JS Scroll Handling</li>
						<li>Built using SASS, following a CSS methodology akin to BEM</li>
						<li>CSS Grid (on this page)</li>
					</ul>
				</div>
			</li>
			<li class="examples-item--small--long-copy trigger-on-scroll">
				<a class="examples-item__link" data-iframe-trigger href="examples/swipeable-cards/index.php">
					<img class="examples-item__image" src="#">
				</a>
				<div class="examples-item__copy">
					<h2 class="examples-item__title">Swipeable Cards</h2>
					<p>Swiped items are compiled for into a shortlist, while the user is presented with more of the sorts of items they are liking.</p>
					<ul>
						<li>Touch Events API</li>
						<li>GSAP Javascript Animations</li>
						<li>AJAX</li>
					</ul>
				</div>
			</li>
			<li class="examples-item--small--long-copy trigger-on-scroll">
				<a class="examples-item__link" data-iframe-trigger href="examples/amp-product-page/index.php">
					<img class="examples-item__image" src="#">
				</a>
				<div class="examples-item__copy">
					<h2 class="examples-item__title">AMP Product Page</h2>
					<p>AMP is more commonly used for articles, but Google are trying to push it into other industries.</p>
					<ul>
						<li>Super fast!</li>
						<li>Interactivity through amp-bind rather than JS</li>
						<li>Stripped down HTML/CSS</li>
					</ul>
				</div>
			</li>
			<li class="examples-item--large-right trigger-on-scroll">
				<a class="examples-item__link" data-iframe-trigger href="/examples/react-songwriter/index.php">
					<img class="examples-item__image" src="#">
				</a>
				<div class="examples-item__copy">
					<h2 class="examples-item__title">React Songwriter</h2>
					<p>More than your average SPA todo list! The idea is that you write your lyrics, switch to chord mode and assign chords on a line/word/letter basis.</p>
					<p>I actually started this with Angular 1, later ported what I had to React, and then switched my state management to Redux.</p>
					<ul>
						<li>Built with React.js</li>
						<li>Expanded/Rebuilt with Redux for state management</li>
					</ul>
				</div>
			</li>
			<li class="examples-item--small trigger-on-scroll">
				<a class="examples-item__link" data-iframe-trigger href="/examples/flamingo-game/index.php">
					<img class="examples-item__image" src="#">
				</a>
				<div class="examples-item__copy">
					<h2 class="examples-item__title">Flamingo Game</h2>
					<p>My first foray into game development, and I'm pretty pleased with the results.</p>
					<ul>
						<li>Vanilla JS</li>
						<li>Canvas API</li>
						<li>Touch Events API</li>
					</ul>
				</div>
			</li>
			<li class="examples-item--small trigger-on-scroll">
				<a class="examples-item__link" data-iframe-trigger href="/examples/warriors-quiz/index.php">
					<img class="examples-item__image" src="#">
				</a>
				<div class="examples-item__copy">
					<h2 class="examples-item__title">Quiz</h2>
					<p>Choose from shuffled answers&hellips; I'm sure you've completed your fair share on buzzfeed ;)</p>
					<ul>
						<li>Shuffled answers</li>
						<li>Velocity.js animation</li>
						<li>Originally used Facebook Share API</li>
					</ul>
				</div>
			</li>	
		</ul>
	</div>
	<div class="examples-iframe__container">
		<iframe class="examples-iframe" src=""></iframe>
	</div>
</section>

<?php include 'footer.php'; ?>