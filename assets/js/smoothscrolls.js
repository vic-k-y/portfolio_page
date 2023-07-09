function smoothScroll(event,val,vals) {
    event.preventDefault();
  
    const target = document.documentElement;
    const scrollHeight = target.scrollHeight;
    const windowHeight = window.innerHeight;
  
    const scrollOptions = {
      top: scrollHeight / val - windowHeight / vals,
      behavior: 'smooth'
    };
  
    window.scrollTo(scrollOptions);
  }
  
  