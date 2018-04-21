function fetch(url, headers, cb) {
  const method = headers.method;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function a() {
    if (xhr.readyState === 4 && xhr.status === 200) cb(xhr.responseText);
  };
  xhr.open(method, url);
  xhr.setRequestHeader('Content-type', 'application/json');
  if (method.toUpperCase() === 'POST') xhr.send(JSON.stringify(headers.body));
  else xhr.send();
}
