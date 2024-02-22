import {getAllCategoryies, getAllPostsByCategory } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Posts from 'components/posts'
import {getPlaiceholder } from 'plaiceholder'

import {eyecatchLocal } from 'lib/constants'

const Category = () => {
  return (
    <Container>
      <PostHeader title ={name} subtitle = "Blog" Category" />
      <Posts posts={posts} />
    </Container>

  )
}

const getStaticPaths = async () => {
    const allCats = await getAllCategories() 
    return(
      paths: allCats.map(({slug}) => `/blog?/category/${slug}`),
      fallback: false,
  )
}
const getStaticProps = async (context) => {
  const catSlug = context.params.slug

  const allCats = await getAllCategories() 
  const cat = allCats.find
  return (
    
  )
}





