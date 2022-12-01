import { error } from '@sveltejs/kit'

export function load() {
  return fetch(`API_URL/site`, {
    headers: {
      'Authorization': `Bearer SITE_TOKEN`,
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(e => {throw error(404, 'Not found')})
}