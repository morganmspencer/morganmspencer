import fetch from 'node-fetch'
import configData from 'src/../../wp.config.json'

const baseUrl = configData.site_url

export const posts = async ({ offset }) => {
  const offsetValue = offset ? offset : 0
  const response = await fetch(
    `${baseUrl}/posts?per_page=${
      configData.posts_per_page + 1
    }&offset=${offsetValue}`
  )
  const json = await response.json()

  return JSON.stringify(json)
}

export const postsByCategory = async ({ id, slug }) => {
  const response = await fetch(
    `${baseUrl}/posts?per_page=${configData.posts_per_page + 1}&filter${
      id ? '[cat]=' + id : '[category_slug]=' + slug
    }`
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
