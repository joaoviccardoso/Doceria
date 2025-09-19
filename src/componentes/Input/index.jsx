import './Input.css'

function Input({ tipo, placeholder, className }){
    return(
        <input className={className} type={tipo} placeholder={placeholder}/>
    )
}

export default Input