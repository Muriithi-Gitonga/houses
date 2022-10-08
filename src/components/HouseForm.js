import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({"location":"", "category":"", "price":"", "owner-contact":"", "image": ""})

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
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
        </label>
        <input type="submit" value="Add task" />
      </form>
    )
}

export default Form