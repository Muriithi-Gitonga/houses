import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    location: "",
    category: "",
    price: "",
    contact: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            Location
            <input
              type="text"
              name="text"
              onChange={(e) =>
                setForm((form) => ({ ...form, location: e.target.value }))
              }
            />
          </label>
          <label>
            Category
            <input
              name="category"
              onChange={(e) =>
                setForm((form) => ({ ...form, category: e.target.value }))
              }
            />
            <label>
              Image
              <input
                name="image"
                onChange={(e) =>
                  setForm((form) => ({ ...form, image: e.target.value }))
                }
              />
            </label>
          </label>
          <label>
            Price
            <input
              name="price"
              onChange={(e) =>
                setForm((form) => ({ ...form, price: e.target.value }))
              }
            />
          </label>
          <label>
            Contact
            <input
              name="contact"
              onChange={(e) =>
                setForm((form) => ({ ...form, contact: e.target.value }))
              }
            />
          </label>
          <input type="submit" value="Post" />
        </div>
      </form>
    </section>
  );
};

export default Form;
