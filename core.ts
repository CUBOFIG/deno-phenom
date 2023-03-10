import "https://deno.land/std@0.173.0/dotenv/load.ts";

const getVideo = async () => {
  try {
    const response = await fetch(
      "https://api.twitch.tv/helix/videos?user_id=144903347&first=1",
      {
        headers: {
          "Client-Id": Deno.env.get("CLIENT_ID") || "",
          "Authorization": Deno.env.get("TOKEN_INIT") || ""
        },
      }
    );
  
    const datajson = await response.json()
    return { ...datajson, state: "offline" };
  } catch (error) {
    console.log(error)
  }
};

export const getInformation = async () => {
  try {
    const response = await fetch( "https://api.twitch.tv/helix/streams?user_id=144903347", {
      method: "GET",
      headers: {
        "Client-Id": Deno.env.get("CLIENT_ID") || "",
        "Authorization": Deno.env.get("TOKEN_INIT") || ""
      },
    });

    const datajson = await response.json()

    return datajson.data.length <= 0 ? await getVideo() : datajson
  } catch (error) {
    console.log(error)
  }
}

export const getTimeLineTwitter = async () => {
  try {
    const response = await fetch( "https://api.twitter.com/2/users/1264985002825199617/tweets", {
      method: "GET",
      headers: {
        "Authorization": Deno.env.get("AUTH_TWITTER") || ""
      },
    });

    const datajson = await response.json()

    return datajson  
  } catch (error) {
    console.log(error) 
  }
}
