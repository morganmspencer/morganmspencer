import fetch from 'node-fetch'

const baseUrl = `${process.env.WP_URL}`

export const search = async ({ query }) => {
  const response = await fetch(
    `${baseUrl}/search?search=${query}&context=embed`
  )
  const json = await response.json()

  return JSON.stringify(json)
}
