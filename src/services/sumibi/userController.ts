// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getLoginUser GET /user/get/login */
export async function getLoginUserUsingGET(options?: { [key: string]: any }) {
  return request<API.RestRespUserLoginRespDto_>('/user/get/login', {
    method: 'GET',
    ...(options || {}),
  });
}

/** userLogin POST /user/login */
export async function userLoginUsingPOST(
  body: API.UserLoginReqDto,
  options?: { [key: string]: any },
) {
  return request<API.RestRespUserLoginRespDto_>('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userRegister POST /user/register */
export async function userRegisterUsingPOST(
  body: API.UserRegisterReqDto,
  options?: { [key: string]: any },
) {
  return request<API.RestRespLong_>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
