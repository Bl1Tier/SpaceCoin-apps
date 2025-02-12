import React from 'react';
import { Panel, Placeholder, Button, PanelHeader, ConfigProvider } from '@vkontakte/vkui'
import { Icon56ErrorOutline, Icon28ChevronBack } from '@vkontakte/icons';
// import './css/error.css'
const ErrorView = props => (
	<ConfigProvider platform='ios'>
		<Panel id={props.id}>
			<React.Fragment>
				<PanelHeader left={props.data.button.back ? <Icon28ChevronBack style={{ paddingLeft: 10 }} fill="#2979FF" onClick={props.data.button.backEvent} /> : null}>Ошибка</PanelHeader>
				<Placeholder
					stretched={true}
					icon={<Icon56ErrorOutline fill="#EF5350" />}
					header={`Ошибка`}
					action={<Button size="m" style={{ background: 'transparent', color: '#5288C1' }} onClick={props.data.button.event} data-to="wheel">{props.data.button.text}</Button>}>{props.data.desc}
				</Placeholder>
			</React.Fragment>
		</Panel>
	</ConfigProvider>
);

export default ErrorView;