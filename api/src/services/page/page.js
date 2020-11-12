import fetch from 'node-fetch'

const baseUrl = `${process.env.WP_URL}`

export const pages = async () => {
  const response = await fetch(`${baseUrl}/pages`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const pageBySlug = async ({ slug }) => {
  const response = await fetch(`${baseUrl}/pages?slug=${slug}`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const page = async ({ id }) => {
  const response = await fetch(`${baseUrl}/pages/${id}`)
  const json = await response.json()

  return JSON.stringify(json)
}
