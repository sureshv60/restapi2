import express from 'express';
import {v4 as uuidv4} from 'uuid';
import {createUsers} from '../controllers/users.js';



const router = express.Router();

const users = []; 

router.get('/',(req,res)=>{
   
    
    res.send('users'+users);
});


router.post('/',(req,res)=>{
   
    const user = req.body;
    console.log('user');
    console.log(user);
    const userWithId = {...user,id:uuidv4()};
    users.push(userWithId);
    console.log('Route Reached');
    res.send(`user with the name ${user.firstName} added to the database!`);
});

router.get('/:id',(req,res)=>{
    const {id} = req.params 
    const foundUser = users.find((user)=>user.id === id);
    console.log(req.params); 
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
   const {id} = req.params;
   users = users.filter((user) => user.id !== id); 
   res.send(`User with the id ${id} deleted from the database.`);
});

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age
    }
    res.send(`User with the id ${id} updated successfully`);
})

export default router;