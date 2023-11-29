new Glide('.glide', 
{
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap:30,
  breakpoint:
  {
   991:{perview:2},
   768:{perview:1}
  }
}).mount();
