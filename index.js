const express = require('express');
const app = express();

let users=[
    {
        name:"Elvin",
        surname:"Aliyev",
        age:21
    },
    {
        name:'Gazanfer',
        surname:'Gazanferli',
        age:25
    },
    {
        name:"Aqil",
        surname:"Atakishiyev",
        age:23
    },
    {
        name:'Vusal',
        surname:'Mammadli',
        age:21
    },
    {
        name:"Ülvi",
        surname:"Aliyev",
        age:19
    },
    {
        name:'Ömər',
        surname:'Bashirzada',
        age:21
    }
];
app.get('/users',(req,res)=>{
    res.send(
        users.map(user=>{
           return JSON.stringify(user)
        })
    );

});

app.listen(3000,()=>{
    console.log('Server succesfully!!');
});