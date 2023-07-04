import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';

function CourseForm(props) {
    
  // const [newdata, setNewData] = useState({
      
  // })
    const dataHandler = props.course;
    console.log(dataHandler);
    var id = props.course._id;

const updateHandler = () =>{
    
}
  return (
    <div>
      <h1>CourseForm</h1>
      <Formik
        initialValues={{...dataHandler}}
        onSubmit={(values) => {
            console.log(values);
            // setNewData({...values});
          axios.put(`http://localhost:4500/updateCourse/${id}`,values).then((req,res)=>{
          console.log(res.data);
    })
        }}
        >
        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <div className='d-flex justify-content-center'>
              <form onSubmit={handleSubmit} className="form-control w-25 m-5 bg-warning-subtle">
                <label className="form-label text-success">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="form-control"
                />
                <label className="form-label text-success">Duration</label>
                <input
                    type="text"
                    name="duration"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.duration}
                    className="form-control"
                />
                <label className="form-label text-success">Type</label>
                <input
                    type="text"
                    name="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                    className="form-control"
                />
                <label className="form-label text-success">Price</label>
                <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    className="form-control mb-2"
                />
                <button type="submit" className="btn btn-outline-warning" onClick={updateHandler} disabled={isSubmitting}>Update</button>
            </form>
            </div>
        )}
      </Formik>

    </div>
  )
}

export default CourseForm