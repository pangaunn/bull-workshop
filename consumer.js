const Queue = require('bull');
const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379')

myQueue.process(async (job) => {
    console.log(job.data)
})