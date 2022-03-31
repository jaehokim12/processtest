const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))


process.on('exit', (code)=>{
    console.log(`exit code : ${code}`);

    if(code !== 0) {
        logger.error({
            exitCode: code,
            message: "I'm gone",
            timestamp: new Date(),
        });
    }
});
process.once('SIGINT', (param)=>{
    console.log("param",param)
    console.log("You've pressed Ctrl + C on this process.");
})