export default async (stream) => {
  if (!stream) throw new Error(`Missing required parameter: "stream"`);

  const result = await fetch(`https://decapi.me/twitch/uptime/${stream}`);

  if (result.ok) {
    const text = await result.text();

    if (!text.includes("offline")) return true;
  }

  return false;
};
