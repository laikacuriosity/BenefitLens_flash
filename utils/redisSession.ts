export async function fetchSession() {
  const sessionId =
    sessionStorage.getItem('redisSessionId');

  if (!sessionId) {
    return null;
  }

  const response =
    await fetch(`/api/session/${sessionId}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}
