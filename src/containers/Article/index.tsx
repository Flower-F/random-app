import axios from 'axios';
import { useEffect, useState } from 'react';

const Article = () => {
  const [article, setArticle] = useState('');

  useEffect(() => {
    axios
      .get('https://qcfb6a.api.cloudendpoint.cn/getArticle')
      .then((res) => {
        console.log(res);
        const data = res.data;
      })
      .catch(() => {});
  }, []);

  return <div>{article}</div>;
};
export default Article;
