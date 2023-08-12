import Head from "next/head";
import Home from "../components/HomePage/Home";

export default function HomeC() {
	return (
		<div>
			<Head>
				<title>VRD Research Lab | Home</title>
				<meta name="description" content="VRD Research Lab" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Home />
			</div>
		</div>
	);
}
