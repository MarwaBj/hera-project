function openShopPop(e) {
  isScrollable = false;
  const pop = document.querySelector(`#shpp_${e.getAttribute('name').split('_')[1]}`);
  pop.classList.add('active');
  document.querySelector('#backbtn').classList.add('active');
  document.querySelector('#backbtn').name = `exitShopProducts_${pop.getAttribute('id')}`;
  document.querySelector('#backbtn').firstChild.classList.add('rotate-90deg');
  popDropdown();
}

function addToCart(e) {
  const container = e.parentNode.parentNode;
  const id = container.getAttribute('id').split('_')[1];
  const priceText = container.children[0].children[3].textContent;
  const price = priceText.split(' ')[1];
  const priceCurrency = priceText.split(' ')[2];

  const headers = {
    method: 'POST',
    body: {
      id,
      price,
      priceCurrency,
      title: 'hall A',
      category: 'halls'
    }
  };

  fetch('/postToCart', headers, (responseText) => {
    console.log('responseText', responseText);
  });
}
