import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Desestructurar los datos del producto desde el payload de la acción
      // Verificar si el producto ya existe en el carrito comparando los nombres
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // Si el producto ya existe en el carrito, aumentar su cantidad
        existingItem.quantity++;
      } else {
        // Si el producto no existe, agregarlo al carrito con cantidad 1
        state.items.push({ name, image, cost, quantity: 1 });
      }

    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Desestructurar el nombre del producto y la nueva cantidad desde el payload de la acción
      // Buscar el producto en el carrito que coincida con el nombre dado
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Si se encuentra el producto, actualizar su cantidad con el nuevo valor
      }



    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
