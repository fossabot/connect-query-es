// Copyright 2021-2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts,import_extension=.js"
// @generated from file eliza.proto (package buf.connect.demo.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConverseRequest, ConverseResponse, CountRequest, CountResponse, IntroduceRequest, IntroduceResponse, Nothing, SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * ElizaService provides a way to talk to the ELIZA, which is a port of
 * the DOCTOR script for Joseph Weizenbaum's original ELIZA program.
 * Created in the mid-1960s at the MIT Artificial Intelligence Laboratory,
 * ELIZA demonstrates the superficiality of human-computer communication.
 * DOCTOR simulates a psychotherapist, and is commonly found as an Easter
 * egg in emacs distributions.
 *
 * @generated from service buf.connect.demo.eliza.v1.ElizaService
 */
export const ElizaService = {
  typeName: "buf.connect.demo.eliza.v1.ElizaService",
  methods: {
    /**
     * Say is a unary request demo. This method should allow for a one sentence
     * response given a one sentence request.
     *
     * @generated from rpc buf.connect.demo.eliza.v1.ElizaService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Say is a unary request demo. This method should allow for a one sentence
     * response given a one sentence request.
     *
     * @generated from rpc buf.connect.demo.eliza.v1.ElizaService.SayAgain
     */
    sayAgain: {
      name: "SayAgain",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Converse is a bi-directional streaming request demo. This method should allow for
     * many requests and many responses.
     *
     * @generated from rpc buf.connect.demo.eliza.v1.ElizaService.Converse
     */
    converse: {
      name: "Converse",
      I: ConverseRequest,
      O: ConverseResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Introduce is a server-streaming request demo.  This method allows for a single request that will return a series
     * of responses
     *
     * @generated from rpc buf.connect.demo.eliza.v1.ElizaService.Introduce
     */
    introduce: {
      name: "Introduce",
      I: IntroduceRequest,
      O: IntroduceResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

/**
 * Second Service just to make sure multiple file generation works
 *
 * @generated from service buf.connect.demo.eliza.v1.SecondService
 */
export const SecondService = {
  typeName: "buf.connect.demo.eliza.v1.SecondService",
  methods: {
    /**
     * Say is a unary request demo. This method should allow for a one sentence
     * response given a one sentence request.
     *
     * @generated from rpc buf.connect.demo.eliza.v1.SecondService.Say
     */
    say: {
      name: "Say",
      I: SayRequest,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Converse is a bi-directional streaming request demo. This method should allow for
     * many requests and many responses.
     *
     * @generated from rpc buf.connect.demo.eliza.v1.SecondService.Converse
     */
    converse: {
      name: "Converse",
      I: ConverseRequest,
      O: ConverseResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Introduce is a server-streaming request demo.  This method allows for a single request that will return a series
     * of responses
     *
     * @generated from rpc buf.connect.demo.eliza.v1.SecondService.Introduce
     */
    introduce: {
      name: "Introduce",
      I: IntroduceRequest,
      O: IntroduceResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

/**
 * @generated from service buf.connect.demo.eliza.v1.Haberdasher
 */
export const Haberdasher = {
  typeName: "buf.connect.demo.eliza.v1.Haberdasher",
  methods: {
    /**
     * @generated from rpc buf.connect.demo.eliza.v1.Haberdasher.Work
     */
    work: {
      name: "Work",
      I: Nothing,
      O: Nothing,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service buf.connect.demo.eliza.v1.Slouch
 */
export const Slouch = {
  typeName: "buf.connect.demo.eliza.v1.Slouch",
  methods: {
    /**
     * @generated from rpc buf.connect.demo.eliza.v1.Slouch.Work
     */
    work: {
      name: "Work",
      I: Nothing,
      O: Nothing,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service buf.connect.demo.eliza.v1.BigIntService
 */
export const BigIntService = {
  typeName: "buf.connect.demo.eliza.v1.BigIntService",
  methods: {
    /**
     * @generated from rpc buf.connect.demo.eliza.v1.BigIntService.Count
     */
    count: {
      name: "Count",
      I: CountRequest,
      O: CountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
