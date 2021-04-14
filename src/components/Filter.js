import React, { useState } from 'react';
import TodoItem from './TodoItem';
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter( { items } ) {
  const tabs = ['全て', '未完了', '完了済み'];
  const [clickedId, setClickedId] = useState(0);
  const [list, setList] = useState(items.map(item => <TodoItem item={item}/> ));

  function setTabView(items, id) {
    switch (id) {
      case 0:
        setList(items.map(item =>
              <TodoItem item={item}/>
            ));
        break;
      case 1:
        setList(items.filter(item => !item.done).map(item =>
              <TodoItem item={item}/>
            ));
        break;
      case 2:
        setList(items.filter(item => item.done).map(item =>
              <TodoItem item={item}/>
            ));
        break;
      default:
        return undefined;
    }
  }

  const handleClick = (event, id) => {
    setClickedId(id);
    setTabView(items, id);
  };

  return (
    <>
      <div className="panel-block">
        {tabs.map((tabLabel, i) => (
          <div
            key={i}
            name={tabLabel}
            onClick={(event) => handleClick(event, i)}
            className={i === clickedId ? "customTab active" : "customTab"}
          >
            {tabLabel}
          </div>
        ))}
      </div>
      {list}
      <div className="panel-block">
        {`${list.length} ${list.length <= 1 ? 'item' : 'items'}`}
      </div>
    </>
  );
}

export default Filter