import React from 'react'
import useReadMore from '../hooks/useReadMore';
import { useSort, useSortObject } from '../hooks/utils';

const array = [1, 67, 33, 123, 2, 4, 6, 8, 90];
const products = [
  {
    name: 'apple',
    price: 100,
  },
  {
    name: 'pin apple',
    price: 300,
  },
  {
    name: 'avocado',
    price: 1000,
  },
  {
    name: 'mango',
    price: 150,
  },
  {
    name: 'orange',
    price: 200,
  }
];

function Article({title, text}) {
  const { more, onReadMore } = useReadMore(true);
 
  const { sorted } = useSort(array);
  const { list } = useSortObject(products, 'name', 'ASC');
  
  const sentence = text.split('.')[0];
  const resultText = more ? text : sentence;
  const moreText = more ? 'Show less' : 'Read more'
  
  return (
    <div>
      <h1>{title}</h1>
      <div>{resultText}</div>
      <button onClick={onReadMore}>{moreText}</button>
      <hr />
      <div>{sorted.join(', ')}</div>
      <div>{list.map(fruit => (
        <div key={fruit.name}>{fruit.name}: {fruit.price}</div>
      ))}</div>
    </div>
  )
}

export default Article