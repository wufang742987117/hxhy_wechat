let user = {}

export function set_userInfo (userInfo) {
  user = userInfo
}

export function get_userInfo (key) {
  if (!key) {
    return user
  } else {
    return user[key]
  }
}
