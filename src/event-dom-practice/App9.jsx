import React , {useState} from 'react';

function App() {
    const [count,setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count -1 );

    return(
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={increment}>
                +1
            </button>
            <button onClick={decrement}>
                -1
            </button>
        </div>
    );
}

export default App;