//import logo from './logo.svg';

import React, {useRef, useState} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  {/*1-13 ~ 1-15*/}
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id:1,
        username: 'mercury',
        email: 'first@gmail.com',
        active: true
    },
    {
        id:2,
        username: 'venus',
        email: 'bright@naver.com',
        active: false
    },
    {
        id:3,
        username: 'earth',
        email: 'life@gm.gist.ac.kr',
        active: false
    }
]);

const nextId = useRef(4);

{/*1-13*/}
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  //배열에 원소 추가하는 두 가지 방법
  //setUsers([...users, user]);
  setUsers(users.concat(user));
  setInputs({
    username: '',
    email: ''
  });
  nextId.current +=1;
};

{/*1-14*/}
const onRemove = id => {
  //=user.id가 id인 것을 제외한 새로운 배열을 만듬
  setUsers(users.filter(user=>user.id !==id));
};

{/*1-15*/}
const onToggle = id => {
  setUsers(
    users.map(user=>
      user.id === id? {...user, active: !user.active}:user
      )
  );
};

  return (
    <>
      {/*1-1 ~ 1-4*/}
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>

      {/*1-5 ~ 1-6*/}
      <Hello name="sun" color="red" />
      <Hello color="pink" />

      <Wrapper>
        <Hello name="mercury" color="brown" isSpecial={true}/>
        <Hello name="venus" color="gold" isSpecial={false}/>
        <Hello name="earth" color="blue" isSpecial/>
        <Hello color="pink"/>
      </Wrapper>

      {/*1-7*/}
      <Counter />

      {/*1-8 ~ 1-10*/}
      <InputSample />

      {/*1-11 ~ 1-15*/}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
