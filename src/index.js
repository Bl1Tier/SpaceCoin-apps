import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
bridge.send("VKWebAppInit");
bridge.send("VKWebAppSetViewSettings", {
	status_bar_style: "light",
	action_bar_color: "#1d1e33",
	navigation_bar_color: "#1d1e33",
});
ReactDOM.render(
	<ConfigProvider platform="ios" appearance="dark">
		<AdaptivityProvider>
			<AppRoot>
				<App />
			</AppRoot>
		</AdaptivityProvider>
	</ConfigProvider>,
	document.getElementById("app")
);
