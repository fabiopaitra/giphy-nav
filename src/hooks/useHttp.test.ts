import { renderHook } from '@testing-library/react-hooks'

import useHttp from './useHttp'


describe('useHttp', () => {

  test('should return search result from useHttp', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp(1, 'Oscar'))

    await waitForNextUpdate()

    expect(result.current.data).toEqual({
      "data": [],
      "pagination": {
        "total_count": 8907,
        "count": 12,
        "offset": 1
      },
      "meta": {
        "status": 200,
        "msg": "OK",
        "isSearch": true,
        "response_id": "hlxlso7bxlyc2jo7ownfvd3czntdobo9s9s208zp"
      }
    })
  })

  test('should return trending result from useHttp', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp(1, ''))

    await waitForNextUpdate()

    expect(result.current.data).toEqual({
      "data": [],
      "pagination": {
        "total_count": 8907,
        "count": 12,
        "offset": 1
      },
      "meta": {
        "status": 200,
        "msg": "OK",
        "isSearch": false,
        "response_id": "hlxlso7bxlyc2jo7ownfvd3czntdobo9s9s208zp"
      }
    })
  })

})

