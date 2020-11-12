import fetch from 'node-fetch'
import configData from 'src/../../wp.config.json'

const baseUrl = configData.site_url

export const categories = async () => {
  const response = await fetch(`${baseUrl}/categories`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const categoryBySlug = async ({ slug }) => {
  const response = await fetch(`${baseUrl}/categories`)
  const categories = await response.json()

  const category = []

  for (var i = 0; i < categories.length; i++) {
    if (categories[i].slug === slug) {
      category.push(categories[i])
    }
  }

  return JSON.stringify(category)
}

export const category = async ({ id }) => {
  const response = await fetch(`${baseUrl}/categories/${id}`)
  const json = await response.json()

  return JSON.stringify(json)
}
