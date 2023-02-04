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

function Product({hit}) {
  return (
    <pre> {JSON.stringify(hit, null, 2)} </pre>
  )
}



const search = ({ hit }) => {
    console.log(hit)
  return (
    <>
    <h1>Search Products</h1>
    <InstantSearch searchClient={client} indexName='products' > 
    <Hits hitComponent={Product} />
    {/* <ToggleRefinement
    attribute={has.digital_delivery}
    label={Digitaldeliveryonly}
    value={string | number | boolean}
    // Optional parameters
    defaultRefinement={boolean}
    /> */}
    </InstantSearch> 

      
    </>
  )
}

export default search