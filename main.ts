import { Hono } from 'https://deno.land/x/hono@v4.3.7/mod.ts'
import { cors, compress, logger, prettyJSON } from 'https://deno.land/x/hono@v4.3.7/middleware.ts'
import { extract } from 'npm:@extractus/article-extractor'

const app = new Hono()

app.use(cors())
app.use(compress())
app.use(logger())
app.use(prettyJSON())

app.get('/', async (c) => {
  const url = c.req.query('url')
  
  if (!url) {
    return c.json({ 
      error: 1,
      message: 'url is required'
    })
  }

  try {
    const data = await extract(url)

    if (!data) {
      return c.json({ 
        error: 1,
        message: 'url is invalid'
      })
    }

    return c.json({
      url,
      title: data.title,
      image: data.image,
      content: data.content,
      ttr: data.ttr,
      type: data.type,
      links: data.links
    })
  } catch (error) {
    return c.json({
      error: 1,
      message: error.message
    })
  }
})

Deno.serve(app.fetch)
