import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//constants
import LinkName from './constants/linkName';

/**
 * screens
 */
//auth
const LoginScreen = React.lazy(() => import("./screens/Login/Login"));

//errors
const Error403Screen = React.lazy(() => import("./screens/Errors/Error403"));
const Error404Screen = React.lazy(() => import("./screens/Errors/Error404"));
const Error500Screen = React.lazy(() => import("./screens/Errors/Error500"));

function App() {
	return (
		<BrowserRouter>
			<React.Suspense fallback={<>...</>}>
				<Routes>
					<Route path={LinkName.LOGIN} element={<LoginScreen />}></Route>
				</Routes>
				<Routes>
					<Route path={LinkName.ERROR_403} element={<Error403Screen />}></Route>
				</Routes>
				<Routes>
					<Route path={LinkName.ERROR_404} element={<Error404Screen />}></Route>
				</Routes>
				<Routes>
					<Route path={LinkName.ERROR_500} element={<Error500Screen />}></Route>
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	);
}

export default App;
