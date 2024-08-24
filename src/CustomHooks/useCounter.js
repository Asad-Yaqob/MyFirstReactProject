import React ,{useState} from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>  setCount(count + 1);
    const decremnet = () => {
       if (count > 0) {
        setCount(count - 1);
       }  
    };

    return [count, increment, decremnet];
}

export default useCounter