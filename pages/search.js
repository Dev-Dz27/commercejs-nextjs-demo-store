import React from 'react'
import Link from 'next/link';
import algoliasearch from 'algoliasearch';
// React Instant Search
import {
  InstantSearch,
  Hits,
  ToggleRefinement,
  RefinementList,
  SearchBox,
} from 'react-instantsearch-dom';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);



const search = ({ hit }) => {
    console.log(hit)
  return (
    <div>search</div>
  )
}

export default search