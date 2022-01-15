import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {

    const formik = useFormik({
        initialValues:{
            name: "",
            email:"",
            password:"",
            confirmedPassword:"",
            phone:"",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required").min(4,"Must be 4 characters or more"),
            email: Yup.string().required("Required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Phease enter your email"),
            password: Yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one letter, one number and one special character"),
            confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"),null],"Password must match"),
            phone: Yup.string().required("Required").min(10,"Phone number must be then characters")
        }),
        onSubmit: (values)=>{
            console.log(values);
        }
    })

    return (
        <div className="section" onSubmit={formik.handleSubmit}>
            <form className="infoform">
                <label>Your Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name:"
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                {formik.errors.name && (<p className="errorMsg">{formik.errors.name}</p> )}
                <label>Email address</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address:"
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                {formik.errors.email && (<p className="errorMsg">{formik.errors.email}</p> )}
                <label>Password</label>
                <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password :"
                onChange={formik.handleChange}
                value={formik.values.password}
                />
                {formik.errors.password && (<p className="errorMsg">{formik.errors.password}</p> )}
                <label>Comfrim Password</label>
                <input
                type="text"
                id="confirmedPassword"
                name="confirmedPassword"
                placeholder="Confirmed password :"
                onChange={formik.handleChange}
                value={formik.values.confirmedPassword}
                />
                {formik.errors.confirmedPassword && (<p className="errorMsg">{formik.errors.confirmedPassword}</p> )}
                <label>Your Phone</label>
                <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone:"
                onChange={formik.handleChange}
                value={formik.values.phone}
                />
                {formik.errors.phone && (<p className="errorMsg">{formik.errors.phone}</p> )}
                <button type="submit">RESGISTER</button>
            </form>
        </div>
    );
}

export default Form;
