import React, { useState } from 'react'
import content from '../content/home.md';

export default function Home() {

    console.log(content)
    const [count, setCount] = useState(0);

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}