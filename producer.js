const Queue = require('bull');
const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379')

async function main() {
    const myJob = await myQueue.add({ foo: 'bar' }, { delay: 1000 * 60 * 60 });
    console.log(myJob)
}

main().then(() => {
    process.exit()
})