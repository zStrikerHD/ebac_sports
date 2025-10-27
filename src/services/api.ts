import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
