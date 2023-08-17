import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      <form onSubmit={handleFormSubmit} className="flex flex-col xl:flex-row items-start justify-between max-w-[1200px] mx-auto">
        <div className="formFill mx-auto xl:mx-0 mb-16 xl:mb-0">
          <div className="flex flex-col xl:flex-row items-center gap-5 xl:gap-10 mb-8 xl:mb-0">
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

          <div className="flex flex-col xl:flex-row items-center gap-5 xl:gap-10">
            <div className="xl:my-8">
              <label htmlFor="phone" className="mb-2 block">
                Phone
              </label>
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Phone" />
            </div>

            <div className="xl:my-8">
              <label htmlFor="email" className="mb-2 block">
                Email Address
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="outline-none w-[300px] p-3 border border-gray-300" placeholder="Email" />
            </div>
          </div>
        </div>

        <div className="checkoutSummary bg-[#F5F5F5] w-[300px] md:w-[480px] mx-auto xl:mx-0 xl:w-[30%] px-6 py-3">
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
    </section>
  );
}
