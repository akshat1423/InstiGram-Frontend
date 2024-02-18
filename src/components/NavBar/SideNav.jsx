import "./SideNav.css"

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function SideNav(){

    return(
        <>
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <h1>Instigram</h1>
            <a href="#">Feed</a>
            <a href="#">Chats</a>
            <a href="#">Profile</a>
        </div>

    <span className="openbtn" onClick={openNav}>&#9776; open</span>
    </> 
    );
}

export default SideNav