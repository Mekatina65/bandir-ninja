import Link from 'next/link'
const Navbar = () => {
    return ( 

        <nav>
            <div className="logo">
                <h1>New Employee List</h1>
                
            </div>
       <Link href="/"><a>Home</a></Link> 
       <Link href="/about"><a>About</a></Link> 
       <Link href="/ninjas"><a> List new employees</a></Link> 
        
        </nav>
     );
}
 
export default Navbar;