function fetch(url, headers, cb) {
  const xhr = new XMLHttpRequest();
  const method = headers.method;
  xhr.onreadystatechange = function a() {
    if (xhr.readyState === 4 && xhr.status === 200) cb(xhr.responseText);
  };
  xhr.open(method, url);
  xhr.setRequestHeader('Content-type', 'application/json');
  if (headers.body) xhr.send(JSON.stringify(headers.body));
  else xhr.send();
}
