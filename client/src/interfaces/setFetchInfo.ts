export interface setFetchInfo {
	url: string;
	options?: { method: string; body: any; headers: {} };
	navigateTo?: { url: string; state?: {} };
}
