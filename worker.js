self.onmessage = (e) => {
  console.log('In worker received', e.data);
  switch (e.data.type) {
    case 'init':
      self.postMessage({ type: 'init_ack' })
      break;
  }
}