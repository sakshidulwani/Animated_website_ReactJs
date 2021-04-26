import React,{useState} from 'react';


function Contact() {
   const [data, setData] = useState({
     fullname:"",
     phone:"",
     email:"",
     message:"",
   })
   const InputEvent = (event) => {
      const {name, value} = event.target;
      setData((preVal) => {
        return{
          ...preVal,
          [name] : value,
        }
      })
   };
   const formSubmit = (e) => {
        e.preventDefault();
        alert(
          `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}`
        )
   };
  return (
    <>
    <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
     <div className="row">
       <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">FullName</label>
    <input type="text" 
    className="form-control" 
      name="fullname"
      value={data.name}
      onChange={InputEvent}
      id="exampleInputEmail1"
      placeholder="Enter your name"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Phone no.</label>
    <input type="number"
     className="form-control"
      name="phone"
      value={data.phone}
      onChange={InputEvent}
      id="exampleInputEmail1"
      placeholder="Mobile No."/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"
     className="form-control"
      name="email"
      value={data.email}
      onChange={InputEvent}
      id="exampleInputEmail1"
      placeholder="name@example.com"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Message</label>
    <textarea className="form-control"
      name="message"
       value={data.message}
       onChange={InputEvent}
       id="exampleFormControlT extarea1" 
       rows="3"></textarea>
   </div>
  <div className="col-12">
  <button type="submit" className="btn btn-outline-primary">Submit</button>
  </div>
</form>
       </div>
     </div>
    </div>
    </>
  );
}

export default Contact;