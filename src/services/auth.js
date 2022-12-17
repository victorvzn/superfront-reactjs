const baseUrl = 'https://6377a2be5c477765122362ad.mockapi.io/api/v1/'

export const verify = async ({ username }) => {
  try {
    const options = {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      params: { username }
    }

    const url = `${baseUrl}/users?username=${username}`

    const response = await fetch(url, options)

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export const signUpUser = async ({ username }) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username })
    }

    const url = `${baseUrl}/users`

    const response = await fetch(url, options)

    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
