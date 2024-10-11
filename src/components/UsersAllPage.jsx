import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, onclick } from '../redux/reducers/usersAllReducer';
import { Link } from 'react-router-dom';

export const UsersAllPage = () => {
    const { users, loading, error } = useSelector(state => state.users);

    const dispatch = useDispatch();
  
    useEffect(() => {dispatch(fetchUsers())}, [dispatch])

  return (
    <div>
          <h1>Пользователи</h1>
          {loading && <p>Загрузка . . . </p>}
          {error && <p>Ошибка: {error}</p>}
          {users.length ? 
            <ul>
                {users.map(user => <li key={user.id} onClick={() => dispatch(onclick(user.id))}>
                    <Link to="/user">{user.name}</Link>
                </li>)}
            </ul> : null}
    </div>
  );
};
