import { useContext, useEffect } from 'react';
import SkillContext from '../../Context/SkillContext';
import { useParams } from 'react-router-dom';

export const BarangEdit = () => {

    const {formValues, onChange, errors, setErrors, barang, getBarang, updateBarang} = useContext(SkillContext);

    let { id } = useParams();

    useEffect(() => {
      getBarang(id);
      setErrors({})
    }, []);

    return (

    <div className='mt-12'>
      <form onSubmit={updateBarang} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>

          <div className='mb-4'>
            <label htmlFor="title" className='block mb-2 text-sm font-medium'>Title</label>
            <input name='title' value={formValues['title']} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.title && <span className='text-sm text-red-400'>{errors.title[0]}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor="category" className='block mb-2 text-sm font-medium'>Category</label>
            <input name='category' value={formValues['category']} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.category && <span className='text-sm text-red-400'>{errors.category[0]}</span>}
          </div>

          <div className='mb-4'>
            <label htmlFor="price" className='block mb-2 text-sm font-medium'>Price</label>
            <input name='price' value={formValues['price']} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.price && <span className='text-sm text-red-400'>{errors.price[0]}</span>}
          </div>
          
          <div className='mb-4'>
            <label htmlFor="stock" className='block mb-2 text-sm font-medium'>Stock</label>
            <input name='stock' value={formValues['stock']} onChange={onChange} className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.stock && <span className='text-sm text-red-400'>{errors.stock[0]}</span>}
          </div>

        </div>

        <div className='mt-5'>
          <button className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Update</button>
        </div>
      </form>
    </div>
  )
}
