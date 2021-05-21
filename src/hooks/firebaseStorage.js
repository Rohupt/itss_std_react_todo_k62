import { useState, useEffect } from 'react';

import { addFbItem, updateFbItem, getFbItems, clearFbItems } from "../lib/firebase";

function useFbStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    const items = await getFbItems();
    setItems(items);
  };

  const putItem = async (item) => {
    const newItem = { text: item.text, done: item.done };
    await addFbItem(newItem);
    setItems([...items, newItem]);
  };

  const updateItem = async (checked) => {
    const changes = { done: !checked.done };
    await updateFbItem(changes, checked.id);
    const newItems = items.map((item) => {
      if (item.id === checked.id) {
        item = { ...item, changes}
      }
      return item;
    })
    setItems(newItems);
  }

  const clearItems = () => {
    items.map(item => {
      clearFbItems(item);
    })
    setItems([]);
  };

  return [items, putItem, updateItem, clearItems];
}

export default useFbStorage;