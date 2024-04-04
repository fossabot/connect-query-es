// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { PartialMessage } from "@bufbuild/protobuf";
import type { CallOptions } from "@connectrpc/connect";
import { createRouterTransport } from "@connectrpc/connect";

import {
  BigIntService,
  ElizaService,
  PaginatedService,
} from "../gen/eliza_connect.js";
import type {
  CountRequest,
  ListResponse,
  SayRequest,
} from "../gen/eliza_pb.js";
import { CountResponse, SayResponse } from "../gen/eliza_pb.js";

/**
 * Asserts X and Y are equal
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

/**
 * Asserts X and Y are not equal
 */
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

/**
 * Helper for `Alike`
 */
type MergeInsertions<T> = T extends object
  ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

/**
 * Similar to `Equal`, but will contend with unions
 */
export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>;

/**
 * Will error if the condition is false
 */
export type Expect<T extends true> = T;

/**
 * Will error if the condition is true
 */
export type ExpectFalse<T extends false> = T;

/**
 * Asserts that a given type is any
 *
 * see https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
 */
export type IsAny<T> = 0 extends T & 1 ? true : false;

/**
 * A test-only helper to increase time (necessary for testing react-query)
 */
export const sleep = async (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

/**
 * a stateless mock for ElizaService
 */
export const mockEliza = (
  override?: PartialMessage<SayRequest>,
  addDelay = false
) =>
  createRouterTransport(({ service }) => {
    service(ElizaService, {
      say: async (input: SayRequest) => {
        if (addDelay) {
          await sleep(1000);
        }
        return new SayResponse(
          override ?? { sentence: `Hello ${input.sentence}` }
        );
      },
    });
  });

/**
 * a stateless mock for BigIntService
 */
export const mockBigInt = () =>
  createRouterTransport(({ service }) => {
    service(BigIntService, { count: () => new CountResponse({ count: 1n }) });
  });

/**
 * a mock for BigIntService that acts as an impromptu database
 */
export const mockStatefulBigIntTransport = (addDelay = false) =>
  createRouterTransport(({ service }) => {
    let count = 0n;
    service(BigIntService, {
      count: async (request?: CountRequest) => {
        if (addDelay) {
          await sleep(1000);
        }
        if (request) {
          count += request.add;
        }
        return new CountResponse({ count });
      },
      getCount: () => new CountResponse({ count }),
    });
  });

/**
 * a mock for PaginatedService that acts as an impromptu database
 */
export const mockPaginatedTransport = (
  override?: PartialMessage<ListResponse>,
  addDelay = false
) =>
  createRouterTransport(({ service }) => {
    service(PaginatedService, {
      list: async (request) => {
        if (addDelay) {
          await sleep(1000);
        }
        if (override !== undefined) {
          return override;
        }
        const base = (request.page - 1n) * 3n;
        const result = {
          page: request.page,
          items: [
            `${base + 1n} Item`,
            `${base + 2n} Item`,
            `${base + 3n} Item`,
          ],
        };
        return result;
      },
    });
  });

export const mockCallOptions = {
  signal: new AbortController().signal,
  timeoutMs: 9000,
  headers: new Headers({
    "Content-Type": 'application/x-shockwave-flash; version="1"',
  }),
} satisfies CallOptions;