import { createAction } from "@reduxjs/toolkit";

export const getOrg = createAction(
  'GET_ORG',
  (organism) => ({ payload: organism })
);