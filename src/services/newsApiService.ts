export async function newsApiService(url: string) {
  try {
    /* 'force-cache' is the default, and can be omitted
       But it is needed for (SSG) to avoid an error on 
       building for production   */
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return { error };
  }
}
