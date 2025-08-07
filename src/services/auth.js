function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`
}

function getCookie(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let c of ca) {
    c = c.trim()
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
  }
  return null
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

function base64url(input) {
  return btoa(input)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

function generateJWT(payloadObj) {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  }
  const payload = payloadObj

  const headerStr = base64url(JSON.stringify(header))
  const payloadStr = base64url(JSON.stringify(payload))
  const signature = base64url('signed')

  return `${headerStr}.${payloadStr}.${signature}`
}

async function loginAPI(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'example@email.com' && password === '123456') {
        const token = generateJWT({
          sub: '123',
          name: 'Demo User',
          email: username,
          iat: Date.now()
        })
        resolve({ status: 200, token })
      } else {
        reject({ status: 401, message: 'Invalid credentials' })
      }
    }, 500)
  })
}

export async function login(username, password) {
  try {
    const { status, token } = await loginAPI(username, password)
    if (status !== 200) {
      return false
    }
    setCookie('jwt_token', token)
    return true
  } catch {
    return false
  }
}
export function logout() {
  deleteCookie('jwt_token')
}

export function isAuthenticated() {
  return !!getCookie('jwt_token')
}

export async function verify() {
  return new Promise(resolve => {
    setTimeout(() => resolve(isAuthenticated()), 300)
  })
}
