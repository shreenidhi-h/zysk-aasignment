import React from "react";
import FeaturedIcon from "./FeaturedIcon.png";
import FeaturedIcon2 from "./FeaturedIcon2.png";
import FeaturedIcon3 from "./FeaturedIcon3.png";
import FeaturedIcon4 from "./FeaturedIcon4.png";
import FeaturedIcon5 from "./FeaturedIcon5.png";
import FeaturedIcon6 from "./FeaturedIcon6.png";

const FeatureItem = ({ icon, heading, subHeading }) => {
	return (
		<div>
			<div className="sm:m-5 max-sm:m-3">
				<div className="flex justify-center mb-2 items-centers">{icon}</div>
				<div className="text-xl font-semibold text-center text-coal">
					{heading}
				</div>
				<div className="max-sm:mb-8 max-sm:mt-2 text-base font-normal text-uda text-center">
					{subHeading}
				</div>
			</div>
		</div>
	);
};
const FeatureItems = [
	{
		icon: <img src={FeaturedIcon} alt="logo" />,
		heading: "Share team inboxes",
		subHeading:
			"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
	},

	{
		icon: <img src={FeaturedIcon2} alt="logo" />,
		heading: "Deliver instant answers",
		subHeading:
			"An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
	},

	{
		icon: <img src={FeaturedIcon3} alt="logo" />,
		heading: "Manage your team with reports",
		subHeading:
			"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
	},

	{
		icon: <img src={FeaturedIcon4} alt="logo" />,
		heading: "Connect with customers",
		subHeading:
			"Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
	},

	{
		icon: <img src={FeaturedIcon5} alt="logo" />,
		heading: "Connect the tools you already use",
		subHeading:
			"Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
	},

	{
		icon: <img src={FeaturedIcon6} alt="logo" />,
		heading: "Our people make the difference",
		subHeading:
			"We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
	},
];

export const FeatureText = () => {
	return (
		<div className="grid grid-cols-3 place-items-center max-sm:grid-cols-1">
			{FeatureItems.map((item) => (
				<FeatureItem
					icon={item.icon}
					heading={item.heading}
					subHeading={item.subHeading}
				/>
			))}
		</div>
	);
};
