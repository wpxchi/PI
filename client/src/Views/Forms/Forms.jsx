import Validate from "./Validate";
import{Link} from 'react-router-dom'
import axios from "axios";
import { useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { allTypes } from "../../Redux/actions";
import { useEffect } from "react";
import style from './Forms.module.css';

const Forms=()=>{
   
  const Types = useSelector((state) => state.Types);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    types: [],
  });

  useEffect(() => {
    dispatch(allTypes());
  }, []);

  const [errors, setErrors] = useState({});
  

  useEffect(() => {
    const validationErrors = Validate(form);
    setErrors(validationErrors);
  }, [form]);

  const disabledButton = Object.keys(errors).length > 0;

  const handleInputChange = (event) => {
    const updatedForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(updatedForm);
  };

  const handleSelect = (e) => {
    const updatedForm = {
      ...form,
      types: [...form.types, e.target.value],
    };
    setForm(updatedForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/pokemons", form)
      .then((res) => {
        window.alert('Successfully created Pokémon.');
        setForm({
          name: '',
          image: '',
          hp: '',
          attack: '',
          defense: '',
          height: '',
          weight: '',
          speed: '',
          types: []
        });
      })
      .catch((err) => {
        window.alert('Ya creaste un pokemon con ese nombre');
      });
  };

    return (
    <div className={style.Forms}>
      <h2 className={style.Title}>FORM PAGE</h2>
      <form onSubmit={handleSubmit} className={style.FormContainer}>
        <label className={style.FormLabel}>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleInputChange} />
          {errors.name? <p  className={style.Error}>{errors.name}</p>:<p></p>}
        </label>

        <label className={style.FormLabel}>
            Image (image link):
            <input type="text" name="image" value={form.image} onChange={handleInputChange}/>
            {errors.image? <p  className={style.Error}>{errors.image}</p>:<p></p>}
        </label>
           
        <label className={style.FormLabel}>
            Hp:
            <input type="text" name="hp" value={form.hp} onChange={handleInputChange}/>
            {errors.hp? <p  className={style.Error}>{errors.hp}</p>:<p></p>}
        </label>
        
        <label className={style.FormLabel}>
           Attack:
            <input type="text" name="attack" value={form.attack} onChange={handleInputChange}/>
            {errors.attack? <p  className={style.Error}> {errors.attack}</p>:<p></p>}
        </label> 

        <label className={style.FormLabel}>
            Defense:
            <input type="text" name="defense" value={form.defense} onChange={handleInputChange}/>
            {errors.defense? <p  className={style.Error}>{errors.defense}</p>:<p></p>}
        </label>

        <label className={style.FormLabel}>
         Height:
            <input type="text" name="height" value={form.height} onChange={handleInputChange}/>
            {errors.height? <p  className={style.Error}>{errors.height}</p>:<p></p>}
        </label>
        
        <label className={style.FormLabel}>
            Weight:
            <input type="text" name="weight" value={form.weight} onChange={handleInputChange}/>
            {errors.weight? <p  className={style.Error} >{errors.weight}</p>:<p></p>}
        </label>
        
        <label className={style.FormLabel}>
            Speed:
            <input type="text" name="speed" value={form.speed} onChange={handleInputChange}/>
            {errors.speed? <p className={style.Error} >{errors.speed}</p>:<p></p>}
        </label>

         <label className={style.FormLabel}>Types:</label>
              <select
               className={style.FormSelect}
                onChange={(e) => handleSelect(e)}>
                {Types.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div className={style.Buttons}>
        <button
          type="submit"
          className={style.SubmitButton}
          disabled={disabledButton}
        >
          Create Pokémon
        </button>
        <Link to={'/HomePage'} className={style.LinkButton}>
          <button className={style.DoneButton}>Done</button>
        </Link>
      </div>
      </form>
    </div>
  );
}

export default Forms