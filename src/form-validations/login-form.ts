import { LoginFormLocale } from "locales/types";
import { object, string } from "yup";

export type LoginErrorMessages = {
	username: string;
	password: string;
};

export const buildLoginErrorMessages = (texts: LoginFormLocale): LoginErrorMessages => ({
	username: texts.usernameError,
	password: texts.passwordError,
});

export const validationSchema = (errorMessages: LoginErrorMessages) => {
	const { username, password } = errorMessages;

	return object().shape({
		username: string().required(username),
		password: string().required(password),
	});
};
