
self.onmessage = function(event) {
  self.postMessage('送られたメッセージは ' + event.data + 'ですよー');
};
