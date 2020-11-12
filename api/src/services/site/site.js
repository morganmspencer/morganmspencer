import fetch from 'node-fetch'
import configData from 'src/../../wp.config.json'

const baseUrl = configData.site_url

export const siteTitle = async () => {
  const response = await fetch(`${baseUrl}/`)
  const json = await response.json()

  return JSON.stringify(json)
}
