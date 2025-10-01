import {Route, Routes} from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/pages/HomePage';
import UserTable from '../components/pages/UserPage/UserTable';
import UserPage from '../components/pages/UserPage/UserPage';
import authorities from '../config/Authorities';
import DashBoardPage from "../components/pages/DashBoardPage/DashBoardPage";
import EventCreatePage from '../components/pages/EventPage/EventCreatePage';
import EventDetail  from "../components/pages/EventPage/EventDetail";
import EventList from "../components/pages/EventPage/EventList";
import ProfilePage from '../components/pages/ProfilePage/ProfilePage';
import UnauthorizedPage from '../components/pages/UnauthorizedPage/UnauthorizedPage';


/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
    //const { checkRole } = useContext(ActiveUserContext);

    /** navigate to different "home"-locations depending on Role the user have */

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route
                path="/admin"
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.SEE_DASHBOARD]}
                        element={<DashBoardPage/>}
                    />

                }
            />

            <Route
                path="/events/create"
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.EVENT_CREATE]}
                        element={<EventCreatePage />}
                    />
                }
            />
            <Route
                path="/events"
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.EVENT_VIEW]}  //backend add
                        element={<EventList />}
                    />
                }
            />
            <Route
                path="/events/:id"
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.EVENT_VIEW]}  //backend add
                        element={<EventDetail />}
                    />
                }
            />
            <Route
                path={'/users'}
                element={
                    <PrivateRoute requiredAuths={[]} element={<UserTable/>}/>}
            />
            <Route
                path='/useredit'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.USER_DEACTIVATE, authorities.USER_CREATE]}
                        element={<UserPage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/useredit/:userId'
                element={
                    <PrivateRoute
                        requiredAuths={[authorities.USER_READ]}
                        element={<UserPage/>}
                    ></PrivateRoute>
                }
            />
            <Route
                path='/profile'
                element={
                    <PrivateRoute
                        requiredAuths={[]}
                        element={<ProfilePage/>}
                    ></PrivateRoute>
                }
            />
            <Route path='/unauthorized' element={<UnauthorizedPage/>}/>

            <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
    );
};

export default Router;
