const channel = new BroadcastChannel('ACKA');
const worker = new Worker('worker.js')
console.log('main.js loadeds')

worker.addEventListener('message', (e) => {
  console.log('worker handler in main received ', e.data)
  switch (e.data.type) {
    case 'init_ack':
      console.log('msg from  ', document.URL)
      break;
  }
})

channel.addEventListener('message', (e) => {
  switch (e.data.type) {
    case 'init':
      console.log('triggering msg to worker')
      worker.postMessage({ type: 'init' });
      break;
  }
})

channel.postMessage({ type: 'init' })
