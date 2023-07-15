// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUser POST /user/add */
export async function addUserUsingPOST(body: API.UserAddRequest, options?: { [key: string]: any }) {
  return request<API.RestRespLong_>('/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUser POST /user/delete */
export async function deleteUserUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.RestRespBoolean_>('/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserById GET /user/get */
export async function getUserByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RestRespUser_>('/user/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getLoginUser GET /user/get/login */
export async function getLoginUserUsingGET(options?: { [key: string]: any }) {
  return request<API.RestRespUserLoginRespDto_>('/user/get/login', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getUserVOById GET /user/get/vo */
export async function getUserVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RestRespUserVO_>('/user/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserByPage POST /user/list/page */
export async function listUserByPageUsingPOST(
  body: API.UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.RestRespPageUser_>('/user/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listUserVOByPage POST /user/list/page/vo */
export async function listUserVOByPageUsingPOST(
  body: API.UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.RestRespPageUserVO_>('/user/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
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

/** userLogout POST /user/logout */
export async function userLogoutUsingPOST(options?: { [key: string]: any }) {
  return request<API.RestRespBoolean_>('/user/logout', {
    method: 'POST',
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

/** updateUser POST /user/update */
export async function updateUserUsingPOST(
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.RestRespBoolean_>('/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMyUser POST /user/update/my */
export async function updateMyUserUsingPOST(
  body: API.UserUpdateMyRequest,
  options?: { [key: string]: any },
) {
  return request<API.RestRespBoolean_>('/user/update/my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
