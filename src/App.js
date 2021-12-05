import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//Constants
import LinkName from './constants/linkName';

/**
 * Screens
 */
//Auth
const LoginScreen = React.lazy(() => import("./screens/Login/Login"));

//Errors
const Error403Screen = React.lazy(() => import("./screens/Errors/Error403"));
const Error404Screen = React.lazy(() => import("./screens/Errors/Error404"));
const Error500Screen = React.lazy(() => import("./screens/Errors/Error500"));

//Home
const HomeScreen = React.lazy(() => import("./screens/Home/Home"));

//TimeKeeping
const TimeKeepingScreen = React.lazy(() => import("./screens/Users/TimeKeeping/TimeKeeping"));

//Project list
const ProjectListScreen = React.lazy(() => import("./screens/Projects/ProjectList/ProjectList"));

//Task
const TaskScreen = React.lazy(() => import("./screens/Projects/Tasks/Task"));



function App() {
	/**
     * render template
     */
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
				<Routes>
					<Route path={LinkName.HOME} element={<HomeScreen />}></Route>
				</Routes>
				<Routes>
					<Route path={LinkName.TIME_KEEPING} element={<TimeKeepingScreen />}></Route>
				</Routes>
				<Routes>
					<Route path={LinkName.PROJECT_LIST} element={<ProjectListScreen />}></Route>
				</Routes>
				<Routes>
					<Route path={LinkName.TASKS} element={<TaskScreen />}></Route>
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	);
}

export default App;
