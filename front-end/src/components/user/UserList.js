import User from './User';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const UserList = ({ data = [], onDelete }) => {
  // console.log(data);
  if (data.length === 0) {
    return (
      <div className="alert alert-info mx-3">Nessun dato da visualizzare</div>
    );
  } else {
    return (
      <div className="row gy-4 mx-3">
        {data.map((user) => {
          return (
            <div key={user.id} className="p-3 border border-2 shadow">
              <User user={user} onDelete={onDelete} />
              <ButtonToolbar className="mt-2">
                <ButtonGroup>
                  <Link
                    to={`/login-user/${user.id}/products`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    <BsFillArrowRightCircleFill className="me-1" />| Log in
                  </Link>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
          );
        })}
      </div>
    );
  }
};

export default UserList;
