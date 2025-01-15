```javascript
// pages/about.js
import { useEffect, useRef } from 'react';

function About() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      console.log(elementRef.current.textContent);
    }
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>This paragraph is rendered on both client and server sides.</p>
      <div ref={elementRef} id="myElement">Hello from server</div>
    </div>
  );
}
export default About;
```