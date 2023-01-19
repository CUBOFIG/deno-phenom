import { config } from './config.ts'

const getVideo = async () => {
  const response = await fetch(
    "https://api.twitch.tv/helix/videos?id=1663382590",
    {
      headers: {
        "Client-Id": config.CLIENT_ID,
        "Authorization": config.TOKEN_INIT,
      },
    }
  );

  const datajson = await response.json()

  return { ...datajson, state: "offline" };
};

export const getInformation = async (): Promise<Record<string, number | string>> =>{
    const response = await fetch( "https://api.twitch.tv/helix/streams?user_id=144903347", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
        "Client-Id": config.CLIENT_ID,
        "Authorization": config.TOKEN_INIT,
      },
    });

    const datajson = await response.json()

    return datajson.data.length <= 0 ? await getVideo() : datajson
}
