function ProductImage({ image, title }) {
  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg">
      <img src={image} alt={title} className="mx-auto h-96 object-contain" />
    </div>
  );
}

export default ProductImage;
