import Link from "next/link";
const ProductDetail = ({ product }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-16">
      <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
      <img src={product.url} alt="" />
      <Link href={"/"}>
        <button className="bg-blue-400 px-2 rounded-lg mt-6 hover:bg-blue-700 hover:text-white">
          back
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:5000/api/products/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
};
