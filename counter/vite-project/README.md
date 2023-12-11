# Why Use Hooks in React

React Hooks are a feature introduced in React 16.8 that allows functional components to have stateful logic and side effects, enabling developers to manage state and lifecycle features in a more concise and readable manner.

## Benefits of Using Hooks:

### 1. **Simplified State Management:**
   Hooks, such as `useState`, provide a straightforward way to manage component state without the need for class components. This makes state management more concise and easier to understand.

### 2. **Reusable Logic:**
   Hooks enable the extraction of component logic into reusable functions. Custom hooks can be created to encapsulate and share logic across different components, promoting code reuse and maintainability.

### 3. **Side Effects Handling:**
   Hooks like `useEffect` allow you to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. This helps in maintaining a clean separation of concerns.

### 4. **Improved Readability:**
   Using hooks often results in more readable and less boilerplate code. Functional components with hooks tend to be more concise and expressive compared to class components, making it easier to understand and maintain the codebase.

### 5. **Easier Testing:**
   Functional components with hooks are generally easier to test than class components. Hooks facilitate the testing of individual units of logic, making it simpler to write unit tests for your components.

## Example Usage:

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}




