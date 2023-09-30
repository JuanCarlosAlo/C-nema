export const getInitialUsername = (email: string | null) => {
	if (!email) return;
	const part = email.split('@');
	const nombreUsuario = part[0];
	return nombreUsuario;
};
