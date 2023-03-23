import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUserById } from '../api';
import UserList from '../components/user/UserList';

const UsersPage = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const updateData = async () => {
    const responseData = await getUsers();
    setData(responseData);
  };

  const handleDeleteClick = async (user) => {
    const confirm = window.confirm('Sei sicuro di eliminare la registrazione?');
    if (confirm) {
      const result = await deleteUserById(user.id);
      if (result.ok) {
        const updatedUsers = users.filter((el) => {
          return el.id !== user.id;
        });
        setUsers(updatedUsers);
      } else {
        console.log(result);
      }
      updateData();
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      <Link to="/register" className="btn btn-primary m-3 p-3">
        Registrati
      </Link>
      <hr className="border border-5 border-dark my-3" />
      <UserList data={data} onDelete={handleDeleteClick} />
    </>
  );
};

export default UsersPage;
