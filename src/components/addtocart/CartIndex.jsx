import axios from "axios";
import {  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const CartIndex = () => {
  
  const {orderdetails, orderdetail} = useContext(SkillContext);
  useNavigate();

  const addtocart  = () => {
    let item = {
      idpelanggan : orderdetail.idpelanggan,
      pelanggan : orderdetail.pelanggan,
      alamat : orderdetail.alamat,
      telp : orderdetail.telp,
      idbarang : orderdetails.idbarang,
      title : orderdetails.title,
      category : orderdetails.category,
      price : orderdetails.price,
      stock : orderdetails.stock
    };

    axios.post("orderdetails", item);
    alert("Pelanggan dan Barang Berhasil Dipilih!");
    window.location.href = "http://localhost:3000/addtocart";
  }

  useEffect(() => {}, []);

  return (
    <div className="mt-12">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID Pelanggan
              </th>
              <th scope="col" className="px-6 py-3">
                Pelanggan
              </th>
              <th scope="col" className="px-9 py-3">
                Alamat
              </th>
              <th scope="col" className="px-3 py-3">
                Telp
              </th>
              <th scope="col" className="px-3 py-3">
                ID Product
              </th>
              <th scope="col" className="px-3 py-3">
                Title
              </th>
              <th scope="col" className="px-3 py-3">
                Category
              </th>
              <th scope="col" className="px-3 py-3">
                Price
              </th>
              <th scope="col" className="px-3 py-3">
                Stock
              </th>
              <th scope="col" className="px-9 py-3">
                Add
              </th>
            </tr>
          </thead>

          <tbody>
                <tr className="bg-white borderdetail-b dark:bg-gray-800 dark:borderdetail-gray-700">
                  <td className="px-6 py-4">{orderdetail.idpelanggan}</td>
                  <td className="px-6 py-4">{orderdetail.pelanggan}</td>
                  <td className="px-6 py-4">{orderdetail.alamat}</td>
                  <td className="px-6 py-4">{orderdetail.telp}</td>
                  <td className="px-6 py-4">{orderdetails.idbarang}</td>
                  <td className="px-6 py-4">{orderdetails.title}</td>
                  <td className="px-6 py-4">{orderdetails.category}</td>
                  <td className="px-6 py-4">{orderdetails.price}</td>
                  <td className="px-6 py-4">{orderdetails.stock}</td>
                  <td>
                    <button onClick={addtocart} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Add To Cart</button>
                  </td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartIndex;
