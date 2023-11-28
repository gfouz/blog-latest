import { newsApiService } from 'services/newsApiService';

const url =
  'https://content.guardianapis.com/technology?api-key=af78297c-28ca-48fa-b431-53ea004a51b3';
const localUrl = 'http://localhost:3000/api/newslive';

const BreakingNews = async () => {
  const offline = await newsApiService(localUrl);
  const online = await newsApiService(url);
  const news = online?.response?.results;
  return (
    <ul className='text-left'>
      {online.error && offline
        ? offline.map((item: any) => (
            <li
              className='list-none my-3 text-[0.5rem] paragraph'
              key={item?.id}
            >
              <a className='no-underline' href={item?.webUrl}>
                <p className='font-black text-slate-500'>{item?.webTitle}</p>
                <p className='font-black text-[black] text-[12px]'>
                  {item?.webPublicationDate}
                </p>
              </a>
            </li>
          ))
        : news.map((item: any) => (
            <li className='list-none my-3 text-[0.5rem]' key={item?.id}>
              <a className='no-underline' href={item?.webUrl}>
                <p className='font-black text-slate-500'>{item?.webTitle}</p>
                <p className='font-black text-[black] text-[12px]'>
                  {item?.webPublicationDate}
                </p>
              </a>
            </li>
          ))}
    </ul>
  );
};
export default BreakingNews;

/*
(node:3736) MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit
*/
