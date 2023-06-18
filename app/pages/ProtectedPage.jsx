import { useAuth } from '../context/auth';
import SlideInHome from './app/components/slide-in-home';

const ProtectedPage = ({children}) => {
    const { loggedIn } = useAuth();
    return loggedIn ? children : SlideInHome
}

export default ProtectedPage;