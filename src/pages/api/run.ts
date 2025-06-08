import type { NextApiRequest, NextApiResponse } from 'next'
import langs from '../../langs'

type ResponseData = {
  ok: boolean
  result?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { langName, code } = req.body
  if (!langs.has(langName)) return res.json({ ok: false })
  const language = langs.get(langName)

  const result = await language.run(code, null)

  res.json({ ok: true, result })
}
