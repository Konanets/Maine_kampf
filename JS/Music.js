const users=[
    {
        name: 'natasza',
        age: 125
    },
    {
        name: 'natasza',
        age: 125
    },
    {
        name: 'natasza',
        age: 125
    },
    {
        name: 'natasza',
        age: 125
    },
    {
        name: 'natasza',
        age: 125
    },
]


let b=users.reduce((previousValue, currentValue) => {
    return previousValue+currentValue.age;
},0)
console.log(b)