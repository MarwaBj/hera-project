function scrollToPlace(e) {
  function toSection(destination) {
    switch (destination) {
      case 'toProcess': return (window.innerHeight * 1);
      default: return 0;
    }
  }
  window.scroll({
    top: toSection(e.name),
    left: 0,
    behavior: 'smooth'
  });
}
