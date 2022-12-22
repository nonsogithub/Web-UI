/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";
import { MessageDto, WaitListDto } from "../utils/apiDtos";

export const userServices = createApi({
	reducerPath: "userServices",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (builder) => ({
		waitList: builder.mutation<MessageDto, WaitListDto>({
			query: (waitlist) => {
				return {
					url: `/User/waitlist`,
					body: waitlist,
					method: "POST",
				};
			},
		}),
	}),
});

export const { useWaitListMutation } = userServices;
