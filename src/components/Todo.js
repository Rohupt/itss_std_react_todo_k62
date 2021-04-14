import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage([]);

  const addItem = (formData) => {
    putItems([{ key: getKey(), text: formData, done: false }, ...items]);
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addItem={addItem}/>
      <Filter items={items}/>
      <div className="panel-block">
        <button className="customTab" onClick={clearItems}>全てのTodoを削除</button>
      </div>
    </div>
  );
}

export default Todo;