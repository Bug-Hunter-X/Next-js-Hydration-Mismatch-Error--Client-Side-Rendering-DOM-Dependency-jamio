```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause a hydration mismatch error
  const isClient = typeof window !== 'undefined';
  const element = isClient ? document.getElementById('myElement') : null;

  return (
    <div>
      <h1>About Page</h1>
      {isClient && <p>This paragraph is only rendered on the client side.</p>}
       {isClient && element && <p>This element is {element.textContent}</p>}
      <div id="myElement">Hello from server</div>
    </div>
  );
}
export default About; 
```