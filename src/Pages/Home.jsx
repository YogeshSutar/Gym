import Navbar from '../Components/Navbar.jsx';
import ContentImageRight from '../Components/ContentImageRight'
const styles = {
    container: {
        backgroundColor: "white",
        backgroundImage: "url('Images/home.jpg')",
        backgroundSize: "cover",
        // paddingTop: "60px", 
        backgroundPosition: "center",
        height: "100vh",
        width:"100%",
        color: "white",
    },
};
const Home = ()=>{
    return(
        <>
        <Navbar />
        <div style={styles.container}>
        <h1 style={{color:"red"}}>Home Page</h1>
        <span>Find the </span>
        </div>
        <ContentImageRight/>

        </>
    )
}

export default Home