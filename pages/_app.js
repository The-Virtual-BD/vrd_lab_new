import "../styles/globals.css";
import "../styles/team.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "../components/SharedPages/Header";
import FooterD from "../components/SharedPages/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import DataCollection from "../components/Context/ContextData";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<DataCollection>
					<div>
						<Header />
						<Component {...pageProps} />
						<FooterD />
						<ToastContainer />
					</div>
				</DataCollection>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
