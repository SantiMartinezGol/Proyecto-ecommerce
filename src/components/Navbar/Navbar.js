import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav  className='Navbar bg-warning bg-gradient pt-4' >
            <div className='Divv pt-5 pb-4 d-flex justify-content-around'> 
                <button className=' btn btn-dark px-4'>Todos</button>
                <button className=' btn btn-dark px-4'>Picantes</button>
                <button className=' btn btn-dark px-4'>Snaks</button>
                <button className=' btn btn-dark px-4'>Salsas</button>
                <CartWidget />
            </div>
        </nav>
    )
}
export default Navbar