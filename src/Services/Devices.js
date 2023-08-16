import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const deviceApi = createApi({
  reducerPath: 'deviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/' }),
  endpoints: (builder) => ({
    getDeviceall: builder.query({
      query: () => `device`,
    }),
    addDevice: builder.mutation({
      query: (dev) => {
        return{
                url:'/add',
                method: 'POST',
                body: dev
              }
      }
    }),
    getDeviceById: builder.query({
      query: (id) => `device/${id}`
    }),
    updateDeviceById: builder.mutation({
      query: (dev) => ({
        url: `update/${dev._id}`,
        method: 'PUT',
        body: dev,
      })
    }),
    deleteDeviceById: builder.mutation({
      query: (id) => {
              return {
                      url: `delete/${id}`,
                      method: 'DELETE',
                     }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {  useGetDeviceallQuery , 
                useAddDeviceMutation,
                useGetDeviceByIdQuery , 
                useUpdateDeviceByIdMutation,
                useDeleteDeviceByIdMutation
              } = deviceApi