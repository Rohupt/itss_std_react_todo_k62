import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item} ) {
  const [isDone, setDone] = useState(false);

  const onClick = () => {
    setDone(!isDone);
    item.done = !item.done;
  }

  return (
    <label className={`panel-block${item.done ? " has-text-grey-light" : ""}`} >
      <input type="checkbox" onClick={onClick} checked={item.done}/>
      {item.text}
    </label>
  );
}

export default TodoItem;