function smoothScroll(event) {
    event.preventDefault();
  
    const target = document.documentElement;
    const scrollHeight = target.scrollHeight;
    const windowHeight = window.innerHeight;
  
    const scrollOptions = {
      top: scrollHeight / 3 - windowHeight / 3,
      behavior: 'smooth'
    };
  
    window.scrollTo(scrollOptions);
  }
  
  