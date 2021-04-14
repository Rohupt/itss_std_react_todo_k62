import { useState, useEffect } from 'react';

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if(!data){
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setItems(JSON.parse(data));
    }
  }, []);

  const putItems = items => {
    setItems(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const clearItems = () => {
    setItems([]);
    localStorage.clear();
  };

  return [items, putItems, clearItems];
}

export default useStorage;