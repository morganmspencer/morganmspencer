import fetch from 'node-fetch'
import configData from 'src/../../wp.config.json'

const baseUrl = configData.site_url

export const search = async ({ query }) => {
  const response = await fetch(
    `${baseUrl}/search?search=${query}&context=embed`
  )
  const json = await response.json()

  return JSON.stringify(json)
}
