import { RouterMiddleware } from './deps.ts'
import { getInformation } from './core.ts'

export const GetDataMiddleware: RouterMiddleware<"/"> = async (context) => {
  const data = await getInformation()

  console.log(data)
  
  context.response.body = ":D"
}
