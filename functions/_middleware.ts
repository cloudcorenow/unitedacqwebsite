export async function onRequest(context: any): Promise<Response> {
  return await context.next();
}
