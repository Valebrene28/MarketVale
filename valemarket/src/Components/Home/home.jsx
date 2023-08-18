import Navbar1 from "../Navbar/navbar";
import { Datos, data } from "../../Items/Datos";
import Cards from "../Cards/Cards";
import Details from "../Details/Details";
import Login from "../Login/Login";



// const listaP=[]

// listaP.push(data)

// console.log(data)
// console.log(listaP)
const Home = () => {

    return (
      
    <>

    <Navbar1/>
    <Cards/>
    <Datos/>
    <Login />
    </>
     
    )
}
// console.log(data);
// const objets = data.map((items) => items)
// console.log(objets)
    



  



export default Home;