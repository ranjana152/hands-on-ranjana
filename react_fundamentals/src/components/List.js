import React from 'react';
function List_example() {
    const numbers = [1, 15, 29, 23, 14, 30, 2, 6, 1, 3]
    const numberList = numbers.map((number, index) =>
        <li key={index}>{index}-{number}</li>
    );
    return (<ul>{numberList}</ul>);
}
export default List_example;