import { gql } from '@apollo/client'
import { client } from '../client'
import CardList from '../components/CardList'

export default function Home({ ships }) {
  return <CardList ships={ships} />
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    {
      ships {
        id
        image
        name
        type
      }
    }    
    `
  });

  return {
    props: {
      ships: data.ships
    }
  }
}
