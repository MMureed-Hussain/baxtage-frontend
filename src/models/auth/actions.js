import { createAction } from '@reduxjs/toolkit';

export const sendOtpRequest = createAction('SEND_OTP_REQUEST');
export const sendOtpSuccess = createAction('SEND_OTP_SUCCESS');
export const sendOtpFailure = createAction('SEND_OTP_FAILURE');

export const verifyCodeRequest = createAction('VERIFY_CODE_REQUEST');
export const verifyCodeSuccess = createAction('VERIFY_CODE_SUCCESS');
export const verifyCodeFailure = createAction('VERIFY_CODE_FAILURE');

export const createAccountRequest = createAction('CREATE_ACCOUNT_REQUEST');
export const createAccountSuccess = createAction('CREATE_ACCOUNT_SUCCESS');
export const createAccountFailure = createAction('CREATE_ACCOUNT_FAILURE');

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const resetPasswordRequest = createAction('RESET_PASSWORD_REQUEST');
export const resetPasswordSuccess = createAction('RESET_PASSWORD_SUCCESS');
export const resetPasswordFailure = createAction('RESET_PASSWORD_FAILURE');

export const setDefaultWorkspace = createAction('SET_DEFAULT_WORKSPACE');
