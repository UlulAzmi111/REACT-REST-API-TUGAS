import { Routes, Route, Link } from "react-router-dom";
import { SkillProvider } from "./Context/SkillContext";
import { Home } from "./components/Home";
import { SkillIndex } from "./components/skills/SkillIndex";
import { SkillCreate } from "./components/skills/SkillCreate";
import { SkillEdit } from "./components/skills/SkillEdit";
import { PelangganIndex } from "./components/dbsmk/PelangganIndex";
import { PelangganCreate } from "./components/dbsmk/PelangganCreate";
import { PelangganEdit } from "./components/dbsmk/PelangganEdit";
import { BarangIndex } from "./components/apidummy/BarangIndex";
import { BarangCreate } from "./components/apidummy/BarangCreate";
import { BarangEdit } from "./components/apidummy/BarangEdit";
import { CartIndex } from "./components/addtocart/CartIndex";

function App() {
  return (
    <SkillProvider>
    <div className="bg-slate-200">
      <div className="max-w-7xl mx-auto min-h-screen">
        <nav>
          <ul className="flex">
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md mt-5">
              <Link to='/'>Home</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md mt-5">
              <Link to='/skills'>Skills</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md mt-5">
              <Link to='/pelanggans'>Data Pelanggan</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md mt-5">
              <Link to='/barangs'>Data Barang</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md mt-5">
              <Link to='/addtocart'>Add to Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/skills" element={<SkillIndex />} />
          <Route path="/skills/create" element={<SkillCreate />} />
          <Route path="/skills/:id/edit" element={<SkillEdit />} /> 
          <Route path="/pelanggans" element={<PelangganIndex />} />
          <Route path="/pelanggans/create" element={<PelangganCreate />} />
          <Route path="/pelanggans/:id/edit" element={<PelangganEdit />} />
          <Route path="/barangs" element={<BarangIndex />} />
          <Route path="/barangs/create" element={<BarangCreate />} />
          <Route path="/barangs/:id/edit" element={<BarangEdit />} /> 
          <Route path="/addtocart" element={<CartIndex />} /> 
        </Routes>
      </div>
    </div>
    </SkillProvider>
  );
}

export default App;
