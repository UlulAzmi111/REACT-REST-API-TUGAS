import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const SkillContext =  createContext();

const initialForm = {
    name : "",
    slug : "",
    pelanggan : "",
    alamat : "",
    telp : "",
    title : "",
    category : "",
    price : "",
    stock : ""
}

export const SkillProvider = ({ children }) => {

    const [formValues, setFormValues] = useState(initialForm);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [pelanggans, setPelanggans] = useState([]);
    const [pelanggan, setPelanggan] = useState([]);
    const [barangs, setBarangs] = useState([]);
    const [barang, setBarang] = useState([]);
    const [orderdetail, setOrderDetail] = useState([]);
    const [orderdetails, setOrderDetails] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setFormValues({...formValues, [name] : value});
    }

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
      };
      
    const getPelanggans = async () => {
        const apiPelanggans = await axios.get("pelanggans");
        setPelanggans(apiPelanggans.data.data);
      };

    const getBarangs = async () => {
        const apiBarangs = await axios.get("barangs");
        setBarangs(apiBarangs.data.data);
      };

    const getOrderDetail = async (idpelanggan) => {
        const response = await axios.get("pelanggans/" + idpelanggan);
        const apiPelanggan = response.data.data;
        setOrderDetail(apiPelanggan);
    }

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        const apiSkill = response.data.data;
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.name,
            slug: apiSkill.slug,
        })
    }

    const getPelanggan = async (idpelanggan) => {
        const response = await axios.get("pelanggans/" + idpelanggan);
        const apiPelanggan = response.data.data;
        setPelanggan(apiPelanggan);
        setFormValues({
            pelanggan: apiPelanggan.pelanggan,
            alamat: apiPelanggan.alamat,
            telp: apiPelanggan.telp
        })
    }

    const getBarang = async (idbarang) => {
        const response = await axios.get("barangs/" + idbarang);
        const apiBarang = response.data.data;
        setBarang(apiBarang);
        setFormValues({
            title: apiBarang.title,
            category: apiBarang.category,
            price: apiBarang.price,
            stock: apiBarang.stock,
        })
    }

    const getOrderDetails = async (idbarang) => {
        const response = await axios.get("barangs/" + idbarang);
        const apiBarang = response.data.data;
        setOrderDetails(apiBarang);
    }

    const storeSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.post("skills", formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e){
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const storePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.post("pelanggans", formValues);
            setFormValues(initialForm);
            navigate("/pelanggans");
        } catch(e){
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const storeBarang = async (e) => {
        e.preventDefault();
        try {
            await axios.post("barangs", formValues);
            setFormValues(initialForm);
            navigate("/barangs");
        } catch(e){
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const updateSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.put("skills/" + skill.id, formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e){
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const updatePelanggan = async (e) => {
        e.preventDefault();
        try {
            await axios.put("pelanggans/" + pelanggan.idpelanggan, formValues);
            setFormValues(initialForm);
            navigate("/pelanggans");
        } catch(e){
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const updateBarang = async (e) => {
        e.preventDefault();
        try {
            await axios.put("barangs/" + barang.idbarang, formValues);
            setFormValues(initialForm);
            navigate("/barangs");
        } catch(e){
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    const deleteSkill = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("skills/" + id);
        getSkills();
    }

    const deletePelanggan = async (idpelanggan) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("pelanggans/" + idpelanggan);
        getPelanggans();
    }

    const deleteBarang = async (idbarang) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("barangs/" + idbarang);
        getBarangs();
    }

    return <SkillContext.Provider value={{ skill, pelanggan, barang, orderdetail, skills, pelanggans, barangs, orderdetails, getSkill, getPelanggan, getBarang, getOrderDetail, getSkills, getPelanggans, getBarangs, getOrderDetails, onChange, formValues, storeSkill, storePelanggan, storeBarang, errors, setErrors, updateSkill, updatePelanggan, updateBarang, deleteSkill, deletePelanggan, deleteBarang }}>{children}</SkillContext.Provider>
}

export default SkillContext;