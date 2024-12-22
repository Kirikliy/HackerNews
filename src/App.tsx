import {store} from './store';
import THEME from './constants/theme';
import {ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes, Navigate} from 'react-router-dom';
import PAGES from './constants/pages';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from './GlobalStyles';
import {lazy} from 'react';
import PageSuspense from '~/ui/PageSuspense/PageSuspense';
import Alerts from '~/features/alerts/components/Alerts';

const NewsPage = lazy(() => import('./features/news/components/NewsPage'));
const NewsItemPage = lazy(() => import('./features/news/components/NewsItemPage'));

export const App = () => (
	<Provider store={store}>
		<ThemeProvider theme={THEME}>
			<CssBaseline />
			<GlobalStyles theme={THEME} />
			<BrowserRouter>
				<Routes>
					<Route
						element={
							<PageSuspense>
								<NewsPage />
							</PageSuspense>
						}
						path={PAGES.news}
					/>
					<Route
						element={
							<PageSuspense>
								<NewsItemPage />
							</PageSuspense>
						}
						path={PAGES.newsItem}
					/>
					<Route element={<Navigate replace to={PAGES.news} />} path={PAGES.any} />
				</Routes>
			</BrowserRouter>
			<Alerts />
		</ThemeProvider>
	</Provider>
);

export default App;
