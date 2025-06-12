const scenes = [
  {
    id: 'lobby',
    imageUrl: 'images/lobby.jpg',
    hotspots: [
      { x: 40, y: 60, width: 12, height: 8, type: 'next', target: 'gallery' },
      { x: 20, y: 30, width: 15, height: 10, type: 'info',
        title: 'Fountain',
        description: 'An ornate marble fountain from the 18th century.',
        docs: ['docs/fountain-specs.pdf'],
        images: ['images/fountain-detail.jpg']
      }
    ]
  },
  // …more scenes…
];
