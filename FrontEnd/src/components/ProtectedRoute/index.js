import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const jwtToken = Cookies.get('jwt_token');

  return jwtToken ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
