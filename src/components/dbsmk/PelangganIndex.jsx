import {  useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const PelangganIndex = () => {
  
  const {pelanggans, getPelanggans, deletePelanggan, getOrderDetail} = useContext(SkillContext);

  useEffect(() => {
    getPelanggans();
  }, []);

  return (
    <div className="mt-12">

    <div className="flex justify-end m-2 p-2">
      <Link to="/pelanggans/create" className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">New Pelanggan</Link>
    </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Pelanggan
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Telp
              </th>
              <th scope="col" className="px-9 py-3">
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
            {pelanggans.map((pelanggan) => {
              return (
                <tr
                  key={pelanggan.idpelanggan}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{pelanggan.pelanggan}</td>
                  <td className="px-6 py-4">{pelanggan.alamat}</td>
                  <td className="px-6 py-4">{pelanggan.telp}</td>
                  <td className="px-6 py-4">
                    <Link to={`/pelanggans/${pelanggan.idpelanggan}/edit`} className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md">Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => deletePelanggan(pelanggan.idpelanggan)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>
                  </td>
                  <td>
                    <button onClick={() => getOrderDetail(pelanggan.idpelanggan)} className="px-4 py-2 bg-blue-400 hover:bg-blue-700 text-white rounded-md">Cart</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />

        <div className="px-2 py-2 bg-red-500 text-center w-80 text-white rounded-md">
          Silahkan klik button Cart pada pelanggan yang anda pilih, dan lanjutkan memilih barang yang anda inginkan!!
        </div>

      </div>
    </div>
  );
};

export default PelangganIndex;
