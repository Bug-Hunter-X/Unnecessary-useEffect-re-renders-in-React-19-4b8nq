```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, even if the count doesn't change.
    console.log('useEffect runs!');
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```