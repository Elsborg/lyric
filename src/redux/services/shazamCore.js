import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  


    export const shazamCoreApi = createApi({
        reducerPath: 'shazxamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '36974cdc26mshf6e666e3f8e51a8p1331f2jsnd393603acc1a');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
        }),

    });
    
    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
    } = shazamCoreApi;
    