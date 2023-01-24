import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type infoResult = {
  count: number;
  pages: number;
  next: string;
  prev: string | number;
};

export type singleCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export const rickApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  tagTypes: ["Character"],
  endpoints: (builder) => ({
    getAllCharacter: builder.query<
      { info: infoResult; results: singleCharacter[] },
      void
    >({
      query: () => "character",
      providesTags: [{ type: "Character", id: "LIST" }],
    }),
    getSingleCharacter: builder.query<singleCharacter, number>({
      query: (id) => `character/${id}`,
      providesTags: (result, error, id) => [{ type: "Character", id }],
    }),
    getRickByPagination: builder.query({
      query: (params) => `character/?${params}`,
      providesTags: (result, error, id) => [{ type: "Character", id }],
    }),
  }),
});

export const {
  useGetAllCharacterQuery,
  useGetSingleCharacterQuery,
  useGetRickByPaginationQuery,
} = rickApi;

export default rickApi.endpoints;
