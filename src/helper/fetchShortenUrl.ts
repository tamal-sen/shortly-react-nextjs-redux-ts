export interface IShortenAPIResponse {
  ok: boolean
  error?: string
  result: {
    original_link: string
    short_link: string
  }
}

export const fetchShortenUrl = (longUrl: string, method = 'GET') => {
  const API_ENDPOINT = 'https://api.shrtco.de'

  return fetch(API_ENDPOINT + '/v2/shorten?url=' + longUrl, {
    // Return promise
    method: method,
    // withCredentials: true,
    // credentials: 'include',
    headers: {
      // 'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
    .then(
      (result) => {
        const myResult: IShortenAPIResponse = result
        // console.log(result);
        return myResult
      },
      (error) => {
        console.log(error)
      }
    )
}
