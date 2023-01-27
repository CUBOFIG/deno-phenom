import { RouterMiddleware } from './deps.ts'
import { getInformation, getTimeLineTwitter} from './core.ts'

export const GetDataMiddleware: RouterMiddleware<"/"> = async (context) => {
  const data = await getInformation()  

  context.response.body = data
}

export const GetTweets: RouterMiddleware<"/tweets"> =  async (context) => {
  const data = await getTimeLineTwitter()

  context.response.body = data
}

