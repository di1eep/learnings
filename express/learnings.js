const express = require('express')
const app = express()



const mockUsers = [
  { id: 1, username: "dileep", displayname: "dileep"},
  { id: 2, username: "patruni", displayname: "patruni"},
  { id: 3, username: "kumar", displayname: "kumar"},

]



// get request

app.get('/', (req, res) => {
  res.status(200).send('Hello World')

})


app.get('/users', (req, res) => {
  res.send([

    { id: 1, username: "dileep", displayname: "dileep"},
    { id: 2, username: "patruni", displayname: "patruni"},
    { id: 3, username: "kumar", displayname: "kumar"},
    

  ])
})

// query parameters


app.get('/users', (req, res) => {

   const { query: {filter, value},  } = req;
    
   if (!filter && !value) { res.send(mockUsers)   } 

   if(filter && value)
    return res.send(mockUsers.filter((user) => user[filter].includes(value))
   
  
      
    );

  return res.send(mockUsers)
   

})


// route paramates

app.get('/users/:id', (req, res) => {
  const users = [
    { id: 1, username: "dileep", displayname: "dileep" },
    { id: 2, username: "patruni", displayname: "patruni" },
    { id: 3, username: "kumar", displayname: "kumar" }
  ];

  const parsedId = parseInt(req.params.id);
  
  if (isNaN(parsedId)) {
    return res.status(400).json({ error: 'Invalid ID' });
  } 
  else {
    const foundUser = users.find(user => user.id === parsedId);
    if (!foundUser) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      return res.json(foundUser);
    }
  }
});

//  POst request 
app.post('/users', (req, res) => {
  
}) 



app.listen(3000, () => {
  console.log(`Running on port 3k`);
} )