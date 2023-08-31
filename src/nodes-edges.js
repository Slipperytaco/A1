export const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Current Wallet' },
      position: { x: 0, y: 0 },
    },
    {
      id: '2',
      data: { label: 'Wallet 2' },
      position: { x: 0, y: 100 },
    },
    {
      id: '2a',
      data: { label: 'Wallet 3' },
      position: { x: 0, y: 200 },
    },
    {
      id: '2b',
      data: { label: 'Wallet 4' },
      position: { x: 0, y: 300 },
    },
    {
      id: '2c',
      data: { label: 'Wallet 5' },
      position: { x: 0, y: 400 },
    },
    {
      id: '2d',
      data: { label: 'Wallet 6' },
      position: { x: 0, y: 500 },
    },
    {
      id: '3',
      data: { label: 'Wallet 7' },
      position: { x: 200, y: 100 },
    },
  ];
  
  export const initialEdges = [
    { id: 'e12', source: '1', target: '2', animated: true },
    { id: 'e13', source: '1', target: '3', animated: true },
    { id: 'e22a', source: '1', target: '2a', animated: true },
    { id: 'e22b', source: '1', target: '2b', animated: true },
    { id: 'e22c', source: '1', target: '2c', animated: true },
    { id: 'e2c2d', source: '1', target: '2d', animated: true },
  ];
  