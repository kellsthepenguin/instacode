import type { NextApiRequest, NextApiResponse } from 'next'
import langs from '../../langs'

type ResponseData = Array<{ name: string; langFamily: string }>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const allLangs = [...langs.values()]
  res.json(
    allLangs.map((lang) => ({
      name: lang.name,
      langFamily: lang.langFamily
    }))
  )
}
