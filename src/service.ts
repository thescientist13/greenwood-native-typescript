async function callService() {
  const f = await fetch(new URL('http://www.google.com'));
  const json = await f.json();

  console.log(json);
}

export { callService }