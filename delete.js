const Queue = require('bull');
const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379')

async function main() {
    const jobId = process.env.npm_config_jobid ?? 123
    const job = await myQueue.getJob(jobId)
    if (job) {
        await job.remove()
        console.log('job delete')
    } else {
        console.log('job not found')
    }
}

main().then(() => {
    process.exit()
})