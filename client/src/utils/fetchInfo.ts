import { useNavigate } from 'react-router-dom';

interface FetchInfo {
	url: string;
	options?: RequestInit;
	navigateTo?: {
		url: string;
		state?: any;
	};
	navigate?: (url: string, state?: any) => void;
}

const fetchData = async ({ url, options, navigateTo, navigate }: FetchInfo) => {
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		if (navigateTo && navigate)
			navigate(navigateTo.url, { state: navigateTo.state });
		return data;
	} catch (error) {
		console.error('Error al realizar la solicitud:', error);
		throw error;
	}
};

export const fetchInfo = async ({
	url,
	options,
	navigateTo,
	navigate
}: FetchInfo) => {
	try {
		const responseData = await fetchData({
			url,
			options,
			navigateTo,
			navigate
		});
		return responseData;
	} catch (error) {
		console.error('Error al obtener coordenadas:', error);
		throw error;
	}
};
