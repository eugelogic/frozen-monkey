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
		</ul>
	</main>
)
