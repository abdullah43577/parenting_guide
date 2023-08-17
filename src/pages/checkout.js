import CheckoutSummary from '@/components/CheckoutSummary';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  });

  useEffect(() => console.log(formData), [formData]);

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = function (event) {
    event.preventDefault();
    console.log('form submitted');
  };

  return (
    <section className="checkout my-16 mx-8">
      <form onSubmit={handleFormSubmit} className="flex items-start justify-between max-w-[1200px] mx-auto">
        <div className="formFill">
          <div className="flex items-center gap-10">
            <div>
              <label htmlFor="firstName" className="mb-2 block">
                First name
              </label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="First Name" />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block">
                Last name
              </label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Last Name" />
            </div>
          </div>

          <div className="my-8">
            <label htmlFor="country" className="mb-2 block">
              Country / Region
            </label>
            <input type="text" name="country" value={formData.country} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Country" />
          </div>

          <div className="my-8">
            <label htmlFor="address" className="mb-2 block">
              Street Address
            </label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Address" />
          </div>

          <div className="my-8">
            <label htmlFor="city" className="mb-2 block">
              Town / City
            </label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="City" />
          </div>

          <div className="my-8">
            <label htmlFor="state" className="mb-2 block">
              State / County
            </label>
            <input type="text" name="state" value={formData.state} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="State" />
          </div>

          <div className="my-8">
            <label htmlFor="zip" className="mb-2 block">
              Postcode / ZIP
            </label>
            <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Zip" />
          </div>

          <div className="my-8">
            <label htmlFor="phone" className="mb-2 block">
              Phone
            </label>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Phone" />
          </div>

          <div className="my-8">
            <label htmlFor="email" className="mb-2 block">
              Email Address
            </label>
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Email" />
          </div>
        </div>

        <div className="checkoutSummary bg-[#F5F5F5] w-[30%] px-6 py-3">
          <h1 className="text-xl text-black font-bold">Your Order</h1>
          <p className="my-3 text-[500]">PDFname x 1</p>
          <p>
            <span className="line-through text-[500]">$45</span> <span>$15</span>
          </p>
          <div className="border border-gray-500 w-full my-4"></div>
          <p className="text-[500]">Subtotal</p>
          <p className="text-[500]">$15</p>
          <div className="border border-gray-500 w-full my-4"></div>

          <p className="text-[500]">Tax</p>
          <p className="text-[500]">$0.00</p>
          <div className="border border-gray-500 w-full my-4"></div>

          <p className="text-[500]">Total</p>
          <p className="text-[500]">$15.00</p>
          <div className="border border-gray-500 w-full my-4"></div>

          <Link href="/checkout">
            <button className="text-[#f3f3f3] bg-[#0b0b17] w-full py-4 rounded-md my-8">Proceed To Pay</button>
          </Link>
        </div>
      </form>

      <CheckoutSummary />
    </section>
  );
}
