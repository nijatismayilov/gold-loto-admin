import LoadingButton from "components/LoadingButton";
import PasswordField from "components/PasswordField";
import TextField from "components/Textfield";
import { useLoginMutation } from "features/api/endpoints/auth";
import { LoginPayload } from "features/api/types";
import { selectLanguage } from "features/localization/slice";
import { validationSchema, buildLoginErrorMessages } from "form-validations/login-form";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";
import { LOGIN_FORM } from "locales";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

const Login: React.FC = () => {
	const language = useSelector(selectLanguage);
	const TEXTS = LOGIN_FORM[language];
	const [login, { isLoading: isLoginLoading }] = useLoginMutation();
	const errorMessages = buildLoginErrorMessages(TEXTS);

	const methods = useForm<LoginPayload>({
		defaultValues: { username: "", password: "" },
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: yupResolver(validationSchema(errorMessages)),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
	} = methods;

	useRevalidateFormOnLangChange({ trigger });

	const onSubmit: SubmitHandler<LoginPayload> = (values) => {
		login(values);
	};

	return (
		<div className='h-screen bg-secondary flex justify-center items-center'>
			<form className='bg-accent p-5 rounded-lg w-1/5 shadow-xl' onSubmit={handleSubmit(onSubmit)}>
				<h3 className='text-center font-semibold text-2xl xs:text-3xl sm:text-4xl mb-4'>
					{TEXTS.formTitle}
				</h3>

				<div className='mb-4'>
					<TextField
						label={TEXTS.usernameLabel}
						placeholder={TEXTS.usernamePlaceholder}
						{...register("username")}
						fullWidth
						helperText={errors.username ? errors.username.message : " "}
						error={!!errors.username}
					/>
				</div>

				<div className='mb-4'>
					<PasswordField
						label={TEXTS.passwordLabel}
						placeholder={TEXTS.passwordPlaceholder}
						{...register("password")}
						fullWidth
						helperText={errors.password ? errors.password.message : " "}
						error={!!errors.password}
					/>
				</div>

				<div className='mt-8'>
					<LoadingButton type='submit' isLoading={isLoginLoading}>
						{TEXTS.submitButton}
					</LoadingButton>
				</div>
			</form>
		</div>
	);
};

export default Login;
