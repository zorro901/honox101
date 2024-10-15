import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
const data =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) as {title?:string}
  return c.json({
    message: data?.title
  })
})

export default app