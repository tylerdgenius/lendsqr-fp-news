import {isAxiosError} from 'axios';
import {useFetcher} from 'netwrap';
import {useState} from 'react';
import Config from '../../config';
import {BaseNewsErrorResponse, GetAllNewsResponse, News} from '../../types';
import Utils from '../../utils';

const useGetNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [totalNewsCount, setTotalNewsCount] = useState(0);

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const {isLoading, trigger} = useFetcher({
    queryFn: async () => {
      const newsHelper = Config.Routes.getNews();

      return Config.Api.newsApi[newsHelper.method]<GetAllNewsResponse>(
        newsHelper.path,
      );
    },
    onSuccess: ({data}) => {
      if (data.status !== 'ok') {
        throw new Error(data.message);
      }

      setNews(data.articles);
      setTotalNewsCount(data.totalResults);
    },
    onError(error) {
      if (isAxiosError<BaseNewsErrorResponse>(error)) {
        setErrorMessage(error.response?.data.message);
      } else if (Utils.isError(error)) {
        const finalError = error as Error;
        setErrorMessage(finalError.message);
      }
    },
  });

  return {
    data: {news, totalNewsCount},
    setNews,
    trigger,
    isLoading,
    errorMessage,
  };
};

export default useGetNews;
