const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*')

    let users = [
        {
            name: 'Bob',
            age: 30,
            gender: 'M'
        },
        {
            name: 'John',
            age: 20,
            gender: 'M'
        }
    ]

    res.write(JSON.stringify(users));
    res.end();

})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})