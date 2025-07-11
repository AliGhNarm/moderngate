import React from "react";

const Form = () => {
  return (
    <div className="w-full max-w-full mx-auto">
      <form className="bg-white  rounded-xl  space-y-6">
        {/* Row 1 - Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="نام"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary w-full"
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary w-full"
          />
        </div>

        {/* Row 2 - Email */}
        <div>
          <input
            type="email"
            placeholder="ایمیل"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary w-full"
          />
        </div>

        {/* Row 3 - Phone + Select */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            required
            placeholder="شماره همراه"
            className=" border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary w-full"
          />
          <select
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary w-full"
            defaultValue=""
          >
            <option value="" disabled>
              نوع سرویس
            </option>
            <option value="ac">کولر و اسپیلت</option>
            <option value="plumbing">لوله کشی</option>
            <option value="electrical">برق کشی</option>
            <option value="handyman">تعمیرات عمومی</option>
          </select>
        </div>

        {/* Row 4 - Message */}
        <div>
          <textarea
            placeholder="چگونه به شما میتوانیم کمک کنیم؟"
            rows="4"
            className="border border-gray-300 rounded-md p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary w-full"
          ></textarea>
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary w-full text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 cursor-pointer transition duration-300"
          >
            رزرو کنید
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
