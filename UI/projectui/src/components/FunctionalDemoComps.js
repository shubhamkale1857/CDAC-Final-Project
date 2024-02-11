import { Link } from "react-router-dom"


const Blog=()=>{
    return(
        <div>
          
      <h1>These are Blogs </h1>
    </div>
    )
}

const About=()=>{
  return(
    <div>
      
  <h1>These are Abouts </h1>
</div>
)

}

const Contact=()=>{
  const email = 'contact@example.com';
  const phoneNumber = '+1 (555) 123-4567';
  return(
    <div>
      
            <div>
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us if you have any questions or concerns.
        You can contact us via email or phone.
      </p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
    </div>
</div>
)

}



export {Blog, About, Contact};