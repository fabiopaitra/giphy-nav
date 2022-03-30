import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.giphy.com/v1/gifs/search', (req, res, ctx) => {
    return res(
      ctx.json(search),
    )
  }),
  rest.get('https://api.giphy.com/v1/gifs/trending', (req, res, ctx) => {
    return res(
      ctx.json(trending),
    )
  }),
]

export const trending = {
  "data": [],
  "pagination": {
    "total_count": 8907,
    "count": 12,
    "offset": 1
  },
  "meta": {
    "isSearch": true,
    "status": 200,
    "msg": "OK",
    "response_id": "hlxlso7bxlyc2jo7ownfvd3czntdobo9s9s208zp"
  }
}

export const search = {
  "data": [],
  "pagination": {
    "total_count": 8907,
    "count": 12,
    "offset": 1
  },
  "meta": {
    "isSearch": false,
    "status": 200,
    "msg": "OK",
    "response_id": "hlxlso7bxlyc2jo7ownfvd3czntdobo9s9s208zp"
  }
}