const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {  
        res.write('<html>');
        res.write('<head><title>User Assignment</title></head>');
        res.write('<body><h1>Welcome to this page. You are my favorite user.</h1><form action="/create-user" method="POST"><input name="username" type="text"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {  
        res.write('<html>');
        res.write('<head><title>Users List</title></head>');
        res.write('<body><h1>Users</h1><ul><li>John B. User</li><li>UserSlayer54</li><li>ThatOtherUser</li><li>User3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log("Username: " + userName);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    }
}

exports.handler = requestHandler;