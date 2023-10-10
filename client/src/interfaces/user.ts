export interface CurrentUser {
	uid: string;
	email: string;
	userName: string;
	type: string;
	savedMedia: [string];
	watched: [string];
}
