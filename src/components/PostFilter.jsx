import React from "react";
import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <CustomInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Searching..."
      />
      <CustomSelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting"
        options={[
          { value: "title", name: "by title" },
          { value: "body", name: "by description" }
        ]}
      />
    </div>
  );
};

export default PostFilter;
