import Breadcrumb from '@/components/shop/breadcrumb.component';
import Footer from '@/components/shop/footer.component';
import NavBar from '@/components/shop/navbar.component';
import Pagination from '@/components/shop/pagination.component';
import ProductCard from '@/components/shop/productCard.component';

export default function Shop() {
  return (
    <main>
      <NavBar />
      <div className='flex flex-col mt-3 gap-1 px-3'>
        <Breadcrumb />
        <div className='mt-4 mb-1 flex items-center justify-between'>
          <h4 className='text-black'>Hogar</h4>
          <div className='flex items-center gap-2'>
            <p className='text-black'>Mostrando 1-10 de 100 Productos</p>
            <p className='text-black'>Filtrar por:</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
        <Pagination />
      </div>
      <Footer />
    </main>
  );
}
