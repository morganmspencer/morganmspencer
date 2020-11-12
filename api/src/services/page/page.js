import fetch from 'node-fetch'
import configData from 'src/../../wp.config.json'

const baseUrl = configData.site_url

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
