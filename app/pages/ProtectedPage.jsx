import { useAuth } from '../contexts/auth';
import SlideInHome from '../components/slide-in-home';

const ProtectedPage = ({children}) => {
    const { loggedIn } = useAuth();
    return loggedIn ? children : SlideInHome
}

export default ProtectedPage;