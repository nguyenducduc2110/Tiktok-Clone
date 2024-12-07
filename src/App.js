import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        //Ko có giá trị route.layout thì lấy component DefaultLayout
                        //const Layout = route.layout || DefaultLayout;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            //cho page upload
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            //page nào ko cần bất kỳ side layout nào
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
