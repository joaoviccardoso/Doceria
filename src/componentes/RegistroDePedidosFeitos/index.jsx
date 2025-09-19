import './registroDePedidosFeitos.css'
import { motion } from 'framer-motion';

import bolo1 from "../../assets/BoloDeLimao2.png";
import bolo2 from "../../assets/bolodechocolate.png";
import bolo3 from "../../assets/BoloDeCasamento.png";
import bolo4 from '../../assets/BoloBranco.png'


const imgBolos = [bolo1, bolo2, bolo3, bolo4]

function RegistroDePedidosFeitos(){
    const divImg = imgBolos.map((imgbolo, index) => (
        <motion.div key={index} className='img-carrossel-registros'>
            <img
                src={imgbolo}
                alt='bolos'
            />
        </motion.div>
        
    ))

    return(divImg)
}

export default RegistroDePedidosFeitos