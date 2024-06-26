import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Sps from "./Components/Sps/Sps";
import { Testonomial } from "./Components/Testonomial/Testonomial";
import { FeatureSection } from "./Components/FeatureSections/FeatureSection";
import Divider from "./Components/SectionDivider/Divider";
import { Faq } from "./Components/Faq/Faquestions";
import { BlogSection } from "./Components/BlogSection/BlogSection";
import { Footer } from "./Components/Footer/Footer";
import { Features } from "./Components/Features/Features";
import { Cat } from "./Components/Cat/Cat";
function App() {
	return (
		<div>
			<Navbar />
			<Section />
			<Sps />
			<Divider />
			<Features />
			<Testonomial />
			<FeatureSection />
			<Divider />
			<Faq />
			<Divider />
			<BlogSection />
			<Cat />
			<Footer />
		</div>
	);
}

export default App;
