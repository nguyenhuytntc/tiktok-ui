import { Fragment } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import DefaultLayout from '~/layouts';
=======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRouters, privateRouters } from '~/routes';
import { DefaultLayout, HeaderOnly } from '~/layouts';
>>>>>>> 599f551411a7bc06d1ca96e6f8177b2e180d1580
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
