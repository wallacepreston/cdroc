export async function handler(event) {
  const secret = process.env.WEBHOOK_SECRET;
  const queryParams = new URLSearchParams(event.rawUrl.split('?')[1]);

  if (queryParams.get('secret') !== secret) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  await Promise.all([
    fetch(process.env.STAGING_HOOK, { method: 'POST' }),
    fetch(process.env.PROD_HOOK, { method: 'POST' }),
  ]);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Builds triggered' }),
  };
}
