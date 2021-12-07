import Link from 'next/link'

export default () => (
	<main>
		<h1>Welcome to Frozen Monkey</h1>
		<h2>Default Examples</h2>
		<a href="https://www.framer.com/docs/examples/" target="_blank" rel="noopener noreferrer">Official Framer Motion examples documentation</a>
		<ul>
			<li>
				<Link href='/animation'>
					<a>Animation</a>
				</Link>
			</li>
			<li>
				<Link href='/keyframes'>
					<a>Keyframes</a>
				</Link>
			</li>
			<li>
				<Link href='/variants'>
					<a>Variants</a>
				</Link>
			</li>
			<li>
				<Link href='/gesture'>
					<a>Gesture</a>
				</Link>
			</li>
			<li>
				<Link href='/drag'>
					<a>Drag</a>
				</Link>
			</li>
			<li>
				<Link href='/motionValues'>
					<a>Motion Values</a>
				</Link>
			</li>
			<li>
				<Link href='/scrollTriggered'>
					<a>Scroll Triggered</a>
				</Link>
			</li>
			<li>
				<Link href='/scrollLinked'>
					<a>Scroll Linked</a>
				</Link>
			</li>
			<li>
				<Link href='/layout'>
					<a>Layout</a>
				</Link>
			</li>
			<li>
				<Link href='/imperative'>
					<a>Imperative</a>
				</Link>
			</li>
			<li>
				<Link href='/svgLineDrawing'>
					<a>SVGLineDrawing</a>
				</Link>
			</li>
		</ul>
	</main>
)
