import fetch from 'node-fetch'

const baseUrl = `${process.env.WP_URL}`

export const posts = async () => {
  const response = await fetch(`${baseUrl}/posts`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const postsByCategory = async ({ id, slug }) => {
  const response = await fetch(
    `${baseUrl}/posts?filter${id ? '[cat]=' + id : '[category_slug]=' + slug}`
  )
  const json = await response.json()

  return JSON.stringify(json)
}

export const postBySlug = async ({ slug }) => {
  const response = await fetch(`${baseUrl}/posts?slug=${slug}`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const post = async ({ id }) => {
  const response = await fetch(`${baseUrl}/posts/${id}`)
  const json = await response.json()

  return JSON.stringify(json)
}
