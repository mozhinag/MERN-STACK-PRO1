import React from 'react';
import { Container, Text, VStack, SimpleGrid} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/Product';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const {fetchProducts, products} = useProductStore();
  useEffect (() => {
fetchProducts();
  }, [fetchProducts]);
  console.log("products",products)

  
  return (
    <Container maxWidth="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"} // Fixed the typo
          bgGradient={"linear(to-r, cyan.400, blue.500)"} // Fixed the gradient
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
        <SimpleGrid
        columns={{ base: 1,  md: 2, lg: 3 }} spacing ={10} w= {'full'}
        >
{products.map((product) =>(
  <ProductCard key = {product._id} product={product} />
))}
        </SimpleGrid>

       {products.length === 0 && (
        <Text fontSize="xl" fontWeight="bold" color="gray.500">
        No Products found 😰{" "}
        <Link to={"/create"}>
          <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
            create a product
          </Text>
        </Link>
      </Text>
       )}
      </VStack>
    </Container>
  );
}

export default HomePage;
