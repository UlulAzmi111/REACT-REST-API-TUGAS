import {  useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SkillContext from '../../Context/SkillContext';

export const BarangIndex = () => {
  
  const {barangs, getBarangs, getOrderDetails, deleteBarang} = useContext(SkillContext);

  useEffect(() => {
    getBarangs();
  }, []);

  return (
    <div className="mt-12">

    <div className="flex justify-end m-2 p-2">
      <Link to="/barangs/create" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">New Barang</Link>
    </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-5 py-3">
                Price
              </th>
              <th scope="col" className="px-3 py-3">
                Stock
              </th>
              <th scope="col" className="px-8 py-3">
                Edit
              </th>
              <th scope="col" className="px-3 py-3">
                Delete
              </th>
              <th scope="col" className="px-3 py-3">
                Cart
              </th>
            </tr>
          </thead>

          <tbody>
            {barangs.map((barang) => {
              return (
                <tr
                  key={barang.idbarang}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{barang.title}</td>
                  <td className="px-6 py-4">{barang.category}</td>
                  <td className="px-6 py-4">{barang.price}</td>
                  <td className="px-6 py-4">{barang.stock}</td>
                  <td className="px-6 py-4">
                    <Link to={`/barangs/${barang.idbarang}/edit`} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deleteBarang(barang.idbarang)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>
                  </td>
                  <td>
                    <button onClick={() => getOrderDetails(barang.idbarang)} className="px-4 py-2 bg-blue-400 hover:bg-blue-700 text-white rounded-md">Cart</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />

        <div className="px-2 py-2 bg-red-500 text-center w-80 text-white rounded-md">
          Setelah memilih pelanggan dan barang lanjutkan klik button Add To Cart untuk menambahkannya pada keranjang!!
        </div>
      </div>
    </div>
  );
};

export default BarangIndex;
