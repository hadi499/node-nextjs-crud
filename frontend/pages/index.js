import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Home = ({ products }) => {
  const { push } = useRouter();
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full max-w-4xl mx-auto h-96 ">
          <div className="mt-6 ">
            <h1 className="text-2xl font-semibold mb-5">List Product</h1>
            <div className="flex flex-wrap gap-5 ">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border-2 border-gray-500 p-2 rounded-lg shadow-lg bg-gray-100 mb-3"
                >
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <img src={product.url} alt="" className="w-60" />
                  <Link href={`/${product.id}`}>
                    <button className="bg-blue-300 rounded-md mt-4 px-2 text-sm font-semibold">
                      detail
                    </button>
                  </Link>
                  <Link href={`/update/${product.id}`}>
                    <button className="bg-green-300 rounded-md mt-4 px-2 text-sm font-semibold">
                      update
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete the item?")) {
                        deleteProduct(product.id);
                      }
                    }}
                  >
                    delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/api/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
