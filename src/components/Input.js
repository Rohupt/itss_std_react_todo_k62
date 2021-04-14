import React, { useState } from 'react';
//import {putItems} from 'Todo';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
const initFormData = Object.freeze('');

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: initFormData,
    }
    this.bindChangeHandler = this.changeHandler.bind(this);
    this.bindSubmitHandler = this.submitHandler.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ formData: e.target.value });
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.formData);
    document.getElementById('form').reset();
  }

  render() {
    return (
      <form id='form' onSubmit={this.bindSubmitHandler}>
        <input name="todoText" className="input panel-block" placeholder="Todo追加" onChange={this.bindChangeHandler} type="text" ></input>
      </form>
    )
  };
}

// function Input( props ) {
//   const [formData, updateFormData] = useState(initFormData);

//   const changeHandler = (e) => {
//     updateFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     console.log(formData);
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     props.addItem(formData);
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <input name="todoText" className="input panel-block" onChange={changeHandler} type="text" ></input>
//     </form>
//   );
// }

export default Input;
