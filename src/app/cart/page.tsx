
import ProductCartComponent from '@/src/component/cart/ProductCartComponent';
import ProductCartListComponent from '@/src/component/cart/ProductCartListComponent';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-200 dark:bg-gray-800 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <ProductCartComponent />
        </div>
        <div className="lg:w-96 lg:sticky lg:top-6 self-start w-full">
          <ProductCartListComponent />
        </div>
      </div>
    </main>
  );
}