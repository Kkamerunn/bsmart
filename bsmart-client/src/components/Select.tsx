import { SelectProps } from "../interfaces";
import useProduct from "../hooks/useProduct";

const Select = ({ handleChange, name }: SelectProps) => {
  const { categories } = useProduct();

  return (
    <select
      name={name}
      onChange={handleChange}
      className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
    >
      <option value="">select a category</option>
      {categories?.length &&
        categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
    </select>
  );
};

export default Select;
