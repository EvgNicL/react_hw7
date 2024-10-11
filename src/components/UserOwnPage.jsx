import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOwn } from '../redux/reducers/userOwnReducer';
import { Link } from 'react-router-dom';

export const UserOwnPage = () => {
    const { user, loading, error } = useSelector(state => state.user_card);

    
    const { user_id } = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    console.log(user.name);
    
    useEffect(() => {dispatch(fetchUserOwn(user_id))}, [dispatch]);

  return (
    <div>
          <h1>Карта пользователя</h1>
          {loading && <p>Загрузка . . . </p>}
          {error && <p>Ошибка: {error}</p>}
          {user.length ? 
            <div>
                {user.id}
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.website}</p>
            </div>
            : null}
            <Link to="/">На главную</Link>
    </div>
  );
};