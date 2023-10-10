import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface FetchInfo {
	url: string;
	options?: RequestInit;
	navigateTo?: {
		url: string;
		state?: any;
	};
}

interface FetchStatus<T> {
	data?: T;
	loading: boolean;
	error?: any;
}

interface UseFetchResult<T> extends FetchStatus<T> {
	setFetchInfo: (fetchInfo: FetchInfo) => void;
}

const fetchData = async <T>(
	fetchInfo: FetchInfo,
	setFetchStatus: (fetchStatus: FetchStatus<T>) => void,
	signal: AbortSignal,
	navigate: NavigateFunction
) => {
	if (!fetchInfo) return;

	const { url, options, navigateTo } = fetchInfo;

	try {
		const response = await fetch(url, { ...options, signal });
		const data = await response.json();
		setFetchStatus({ data, loading: false, error: undefined });

		if (navigateTo) navigate(navigateTo.url, { state: navigateTo.state });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

export const useFetch = <T>(initialFetch: FetchInfo): UseFetchResult<T> => {
	const [fetchStatus, setFetchStatus] = useState<FetchStatus<T>>({
		data: undefined,
		loading: true,
		error: undefined
	});
	const [fetchInfo, setFetchInfo] = useState<FetchInfo>(initialFetch);

	const navigate = useNavigate();

	useEffect(() => {
		const controller = new AbortController();
		fetchData(fetchInfo, setFetchStatus, controller.signal, navigate);
		return () => controller.abort();
	}, [fetchInfo, navigate]);

	return { ...fetchStatus, setFetchInfo };
};
