/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CreateUserDto, UpdateUserDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name UsersControllerCreate
   * @request POST:/users
   * @response `201` `void`
   */
  usersControllerCreate = (data: CreateUserDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name UsersControllerFindAll
   * @request GET:/users
   * @response `200` `void`
   */
  usersControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name UsersControllerFindOne
   * @request GET:/users/{id}
   * @response `200` `void`
   */
  usersControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name UsersControllerUpdate
   * @request PATCH:/users/{id}
   * @response `200` `void`
   */
  usersControllerUpdate = (
    id: string,
    data: UpdateUserDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/users/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name UsersControllerRemove
   * @request DELETE:/users/{id}
   * @response `200` `void`
   */
  usersControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/${id}`,
      method: "DELETE",
      ...params,
    });
}
