import Link from 'next/link'
const Header = () => {
    const layout = {
        color : 'blue',
        
    }
return (
    <div>
       <p >
       <Link href='/' >
            <a style={layout}>home</a>
        </Link>

       </p>
        <p style={layout}>
        <Link href='/about'>
            <a>
                about
            </a>
        </Link>

        </p>
    </div>
)
}
export default Header