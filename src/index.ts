import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/chile', (c) => {
  return c.text('Hello Chile!')
})


export default app
