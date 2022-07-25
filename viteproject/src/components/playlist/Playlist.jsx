import Titulo from '../titulo/Titulo'

const Playlist = ({ titulo, descripcion }) => {
    return (
        <>
        <div style={{ background: "#CFA2E0" }}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlXqmKH9DXGhIsSvGfQuNGs89iHz8SB0Xgg&usqp=CAU" alt="Wu-tang-clan Disco" /> */}
            
            <Titulo titulo={titulo} />
            <p> {descripcion}</p>
        </div>

        </>
    )
}

export default Playlist