import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/resource`);
  const data = await response.json();
  return data;
};

const List = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['projects'], queryFn: fetchData });
  console.log(data);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{data}</div>}
      <div>제발되라</div>
      <h1>ㅎㅇㅎㅇ</h1>
    </div>
  );
};

export default List;
