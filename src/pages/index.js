import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import s from '../styles/index.module.css';

const IndexPage = () => {
  const data = useStaticQuery(pageQuery);
  const types = new Set();
  data.allStrapiProducts.edges.map(el => types.add(el.node.type));
  let code = [];
  types.forEach((value, valueAgain, types) => {
    const typeData = data.allStrapiProducts.edges.filter(
      el => el.node.type === value
    )
    code.push(
      <article>
        <h2 className={s.productType}>{value}</h2>
        <div className={s.productRoot}>
          {typeData.map(el => (
            <div className={s.productRoot_product}>
              <img
                src={`http://localhost:1337${el.node.img[0].url}`}
                alt={value}
                className={s.productRoot_product__img}
              />
              <p className={s.productRoot_product__name}>{el.node.name}</p>
              <p className={s.productRoot_product__price}>USD {el.node.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </article>
    )
  });

  return <Layout bgColor='#f5f5f5' >{code.map(el => el)}</Layout>
}

export default IndexPage

const pageQuery = graphql`
  query IndexQuery {
    allStrapiProducts {
      edges {
        node {
          id
          name
          price
          type
          img {
            url
          }
        }
      }
    }
  }
`
