import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//Constants
import LinkName from './constants/linkName';
import Layout from './screens/Layout/Layout';

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

//TimeKeeping
const UserInformationScreen = React.lazy(() => import("./screens/Users/Information/UserInformation"));

//Project list
const ProjectListScreen = React.lazy(() => import("./screens/Projects/ProjectList/ProjectList"));

//Project detail
const ProjectDetailScreen = React.lazy(() => import("./screens/Projects/ProjectDetail/ProjectDetail"));

//Project create
const ProjectCreateScreen = React.lazy(() => import("./screens/Projects/ProjectCreate/ProjectCreate"));

//Project activity
const ProjectActivityScreen = React.lazy(() => import("./screens/Projects/ProjectActivity/ProjectActivity"));

//Task list
const TaskListScreen = React.lazy(() => import("./screens/Projects/TaskList/TaskList"));

//Task list
const TaskCreateScreen = React.lazy(() => import("./screens/Projects/TaskCreate/TaskCreate"));

//Task detail
const TaskDetailScreen = React.lazy(() => import("./screens/Projects/TaskDetail/TaskDetail"));

//Note
const NoteScreen = React.lazy(() => import("./screens/Note/Note"));

//UserList
const UserListScreen = React.lazy(() => import("./screens/Users/UserList/UserList"));




function App() {
	/**
	 * render template
	 */
	return (
		<BrowserRouter>
			<React.Suspense fallback={<>...</>}>
				<Routes>
					<Route path={LinkName.LOGIN} element={<LoginScreen />}></Route>
					<Route path={LinkName.ERROR_403} element={<Error403Screen />}></Route>
					<Route path={LinkName.ERROR_404} element={<Error404Screen />}></Route>
					<Route path={LinkName.ERROR_500} element={<Error500Screen />}></Route>
				</Routes>
				<Layout>
					<Routes>
						<Route path={LinkName.HOME} element={<HomeScreen />}></Route>
						<Route path={LinkName.TIME_KEEPING} element={<TimeKeepingScreen />}></Route>
						<Route path={LinkName.PROJECT_LIST} element={<ProjectListScreen />}></Route>
						<Route path={LinkName.TASK_LIST} element={<TaskListScreen />}></Route>
						<Route path={LinkName.PROJECT_DETAIL} element={<ProjectDetailScreen />}></Route>
						<Route path={LinkName.PROJECT_ACTIVITY} element={<ProjectActivityScreen />}></Route>
						<Route path={LinkName.USER_INFORMATION} element={<UserInformationScreen />}></Route>
						<Route path={LinkName.PROJECT_CREATE} element={<ProjectCreateScreen />}></Route>
						<Route path={LinkName.TASK_CREATE} element={<TaskCreateScreen />}></Route>
						<Route path={LinkName.TASK_DETAIL} element={<TaskDetailScreen />}></Route>
						<Route path={LinkName.NOTE} element={<NoteScreen />}></Route>
						<Route path={LinkName.USER_LIST} element={<UserListScreen />}></Route>
					</Routes>
				</Layout>
			</React.Suspense>
		</BrowserRouter>
	);
}

export default App;
