import { publicRouter, privateRouter } from '../routes';
import { Routes, Route } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';


const AppRouter = function () {
    let { isAuth } = useTypedSelector(store => store.auth)

    return (
        isAuth ?
            <Routes>
                {privateRouter.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
            </Routes>
            :
            <Routes>
                {publicRouter.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
            </Routes>
    )
}

export default AppRouter
