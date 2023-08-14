import { useForm } from "react-hook-form";
import "./style/FilterPrice.css";

const FilterPrice = ({ setFromTo }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const from = Number(data.from.trim());
    const to = +data.to.trim();
    const obj = {
      from: from || 0,
      to: to || Infinity,
    };
    setFromTo(obj);
    reset({
      from: "",
      to: Infinity,
    });
  };

  return (
    <article className="filter__price">
      <h2 className="filter__price__title">Price</h2>
      <form className="filter__price__form" onSubmit={handleSubmit(submit)}>
        <div className="filter__price__input">
          <label className="filter__price__label" htmlFor="from">
            From
          </label>
          <input {...register("from")} type="number" id="from" />
        </div>
        <div className="filter__price__input">
          <label className="filter__price__label" htmlFor="to">
            To
          </label>
          <input {...register("to")} type="number" id="to" />
        </div>
        <button className="filter__price__btn">Filter Price</button>
      </form>
    </article>
  );
};

export default FilterPrice;
