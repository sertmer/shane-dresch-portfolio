const projects = [
  {
    title: 'Southern Illinois University - Imagine',
    videoLink: 'https://youtu.be/KioJs5NrOyc',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KioJs5NrOyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1t2NluPKDesafrbPVCtrq0TjZwENRroUI/view?usp=sharing','https://drive.google.com/file/d/1Vwz0zkO4n37m5vtx6NuI-KltZ0u1-xm6/view?usp=sharing','https://drive.google.com/file/d/1WbqabbAjrK9cHPlUgEC1dcwoc9tBY_0R/view?usp=sharing']
  },
  {
    title: 'Love Liberation - Music in the Moment',
    videoLink: 'https://youtu.be/fziNOkE8NcQ',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fziNOkE8NcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1BwQvIpLMGwUVR8jNsfGfxnq0W3nJsWD3/view?usp=sharing','https://drive.google.com/file/d/12SWUL5E-sfIYfcYqjJZT1-AnriQsNIoU/view?usp=sharing','https://drive.google.com/file/d/1A1Fn_F9291eFsj3aeww2jqk3f9P1t7bf/view?usp=sharing']
  },
  {
    title: 'Colorado Camping - A Visual Diary',
    videoLink: 'https://youtu.be/vsKdQ-ucwYk',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vsKdQ-ucwYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1tZ7PvMWIQ56Ev2zLaceCJBRVOzehrW7O/view?usp=sharing','https://drive.google.com/file/d/1mDDRlWz1EPYff_1dQZSCoGG4xfqAXwG-/view?usp=sharing','https://drive.google.com/file/d/1mDDRlWz1EPYff_1dQZSCoGG4xfqAXwG-/view?usp=sharing']
  },
  {
    title: 'Fashion BTS',
    videoLink: 'https://youtu.be/TXFuySt2zEY',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TXFuySt2zEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1H58sFitnY_cAsWtfNfVwmETOhlqjRTi3/view?usp=sharing','https://drive.google.com/file/d/12vGjZ_DJRJxTHa4Q-HKvz_a3JeFaCIft/view?usp=sharing','https://drive.google.com/file/d/1rDMrdmtNOeZ2qlyS1rvOZ6RQywlPGar0/view?usp=sharing']
  },
  {
    title: 'Jackson Safety - All in a Day\'s Work',
    videoLink: 'https://youtu.be/pkIFH6RFvJc',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pkIFH6RFvJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1rQI7RNN5N1xANdt4x7ujZrqrA5fWVkkk/view?usp=sharing','https://drive.google.com/file/d/1sc18sjGRoj_vdDojaMqLW9H28U_L-Vuj/view?usp=sharing','https://drive.google.com/file/d/18piPZS837xhjutA_3svqAsnvPrjAtUBV/view?usp=sharing']
  },
  {
    title: 'Family Counseling Services - Hope Starts Here',
    videoLink: 'https://youtu.be/sNcPxtpvgeo',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sNcPxtpvgeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1KYgycD_u1uyUpeIWBJeXFSKCcSOM0aoL/view?usp=sharing','https://drive.google.com/file/d/1mrq2CfHq2ezKQwAr_dQb7SkZQXtr_B5m/view?usp=sharing','https://drive.google.com/file/d/1G2OHrKkE0mR4V9l81VTu-9A0AdERqLr5/view?usp=sharing']
  },
  {
    title: 'BC Merchants - Raise Resilient',
    videoLink: 'https://youtu.be/-3wWpooDr_I',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-3wWpooDr_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/17G1QH3H_LVi09PuozyJ9ODZkip9cRIHS/view?usp=sharing','https://drive.google.com/file/d/1J4tIgkJPaQBHXD0otEY_9sIVqIi9d-gH/view?usp=sharing','https://drive.google.com/file/d/1AIPFv8bYoaw727q9MnaK7bEe3zvjRyzj/view?usp=sharing']
  },
  {
    title: 'Southern Illinois University - Driven',
    videoLink: 'https://youtu.be/yGxZJefAqkA',
    embedLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yGxZJefAqkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    stills: ['https://drive.google.com/file/d/1i2p5uUHWNrXLU6Fhig5X5qcnGBSqxBHi/view?usp=sharing','https://drive.google.com/file/d/1UZcTTeaj3nNj_ww5SB-sc7qBpuSs9rte/view?usp=sharing','https://drive.google.com/file/d/189HHPPHJJR-2Il6i7DFzjpPzSQWYmdXL/view?usp=sharing']
  },
]