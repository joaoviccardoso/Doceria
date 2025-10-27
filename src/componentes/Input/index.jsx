import './Input.css'

function Input({ tipo, placeholder, className, id }){
    return(
        <input className={className} type={tipo} id={id} placeholder={placeholder}/>
    )
}

export default Input