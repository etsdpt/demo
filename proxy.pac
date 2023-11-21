function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*huggingface.co*")) {
    return "PROXY proxy.emea.ibm.com:8080; DIRECT";
  } else {
    return "DIRECT";
  }
}
