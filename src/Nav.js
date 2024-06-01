import './App.css';

export function Nav(){
    const text={
          color:'white',
          textDecoration:'none',
        }
    return(
        <div>
 <nav>
      <ul>
   <li class='title'>Knowledge Nest</li>

   <a href='/' style={{...text}}><li>Home</li></a>

   <a href='/about' style={{...text}}><li>About</li></a>

 {/* <a href='/contact' style={{...text}}><li>Contact </li></a> */}

 <a href='/gallery' style={{...text}}><li>Gallery </li></a> 

 <a href='/page' style={{...text}}> <li>page</li></a>

  <a href='/contact'> <li><button class='join'>Join Class</button></li></a>

</ul></nav>
        </div>
    )
}