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

import {
  CreateHabitDto,
  UpdateActivityLogDto,
  UpdateHabitDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Habits<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name HabitsControllerCreate
   * @request POST:/habits
   * @response `201` `void`
   */
  habitsControllerCreate = (data: CreateHabitDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/habits`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name HabitsControllerFindAll
   * @request GET:/habits
   * @response `200` `void`
   */
  habitsControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/habits`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name HabitsControllerFindOne
   * @request GET:/habits/{id}
   * @response `200` `void`
   */
  habitsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/habits/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name HabitsControllerUpdate
   * @request PATCH:/habits/{id}
   * @response `200` `void`
   */
  habitsControllerUpdate = (
    id: string,
    data: UpdateHabitDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/habits/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name HabitsControllerRemove
   * @request DELETE:/habits/{id}
   * @response `200` `void`
   */
  habitsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/habits/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @name ActivityLogsControllerCreate
   * @request POST:/habits/{habitId}/activity-logs
   * @response `201` `void`
   */
  activityLogsControllerCreate = (
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/habits/${habitId}/activity-logs`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @name ActivityLogsControllerFindAll
   * @request GET:/habits/{habitId}/activity-logs
   * @response `200` `void`
   */
  activityLogsControllerFindAll = (
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/habits/${habitId}/activity-logs`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name ActivityLogsControllerFindOne
   * @request GET:/habits/{habitId}/activity-logs/{id}
   * @response `200` `void`
   */
  activityLogsControllerFindOne = (
    id: string,
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/habits/${habitId}/activity-logs/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name ActivityLogsControllerUpdate
   * @request PATCH:/habits/{habitId}/activity-logs/{id}
   * @response `200` `void`
   */
  activityLogsControllerUpdate = (
    id: string,
    habitId: string,
    data: UpdateActivityLogDto,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/habits/${habitId}/activity-logs/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name ActivityLogsControllerRemove
   * @request DELETE:/habits/{habitId}/activity-logs/{id}
   * @response `200` `void`
   */
  activityLogsControllerRemove = (
    id: string,
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/habits/${habitId}/activity-logs/${id}`,
      method: "DELETE",
      ...params,
    });
}
