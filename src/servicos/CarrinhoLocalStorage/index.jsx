const CART_KEY = 'doceria_cart';

//  Retorna o carrinho armazenado
export function getCarrinho() {
  const salvarCarrinho = localStorage.getItem(CART_KEY);
  return salvarCarrinho ? JSON.parse(salvarCarrinho) : { items: [], total: 0 };
}

//  Salva o carrinho no localStorage
export function saveCarrinho(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

//  Adiciona um item
export function addToCarrinho(item) {
  const cart = getCarrinho();
  const existingItem = cart.items.find(i => i.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({ ...item, quantity: 1 });
  }

  cart.total = calculateTotal(cart.items);
  saveCarrinho(cart);
  return cart;
}

//  Remove um item
export function removeFromCarrinho(itemId) {
  const cart = getCarrinho();
  cart.items = cart.items.filter(i => i.id !== itemId);
  cart.total = calculateTotal(cart.items);
  saveCarrinho(cart);
  return cart;
}

//  Calcula o total
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

//  Limpa o carrinho
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
