export function registerUser(user: any) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

export function loginUser(email: string, senha: string) {
  const user = getUser();
  if (!user) return false;
  return user.email === email && user.senha === senha;
}

export function logoutUser() {
  localStorage.removeItem("session");
}

export function startSession(user: any) {
  localStorage.setItem("session", JSON.stringify(user));
}

export function getSession() {
  const data = localStorage.getItem("session");
  return data ? JSON.parse(data) : null;
}
