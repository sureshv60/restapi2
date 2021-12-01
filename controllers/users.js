
export const createUsers = (req,res)=>{
   
    const user = req.body;
    console.log('user');
    console.log(user);
    const userWithId = {...user,id:uuidv4()};
    users.push(userWithId);
    console.log('Route Reached');
    res.send(`user with the name ${user.firstName} added to the database!`);
}