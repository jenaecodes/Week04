import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
    {/* render details about one entity in persons.json saved in itemData*/}
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
          <h4 className="card col-7">{itemData.person2.name}</h4>
          <h5 className="card-title">{itemData.person2.phone}</h5>
          <p className="card-text">{itemData.person2.birthdate}</p>
          <a href={'mailto:' + itemData.person2.email} className="card-link">{itemData.person2.email}</a>
          <p className="card-text">A friend</p>
        </div>
      </article>
    </Layout>
  );
}
{/*render details about all other entities in persons.json related to id*/}
{/* check for existence of itemData.related property*/}