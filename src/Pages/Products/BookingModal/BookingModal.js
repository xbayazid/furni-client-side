import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Form, json } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({productModal, setProductModal, product}) => {
  const {title, resaleP} = productModal;
  const {user} = useContext(AuthContext);

  const handleBooking = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    

    const booking = {
      product : title,
      customerName : name,
      price,
      email,
      phone,
      location,
    }
    
    fetch('https://furni-server-side-bayaziddeveloper-gmailcom.vercel.app/bookings', {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.acknowledged){
      setProductModal(null);
      toast.success('Booking confirmed')
      }
    })

  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {title}
          </h3>
          <Form onSubmit={handleBooking}>
          <input type="text" name="name" defaultValue={user.displayName} disabled className="input input-bordered w-full my-2" />
          <input type="email" name="email" defaultValue={user.email} disabled className="input input-bordered w-full my-2" />
          <input type="text" name="price" value={resaleP} disabled className="input input-bordered w-full my-2" />
          <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full my-2" />
          <input type="text" name="location" placeholder="Location" className="input input-bordered w-full my-2" />
          <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </Form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
