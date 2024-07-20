import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "mh4umjmffjey";
const apiSecret = "rs4s7z6bpzgyc2assyc7sjj42wqyb8a8667xqerkwr9peeu4e2adcent8vwar358";

export const client = new StreamClient(apiKey, apiSecret);