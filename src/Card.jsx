function Card ({musicas}){
    return(
        <div>
            <div className="containerCard">
                <table>
                    <thead>
                        <td> Nombre </td>
                        <td>  Cancion Favorita </td>
                    </thead>
                    <tbody>
                        {musicas.map((musica, index)=>(
                            <>
                                <tr>
                                    <td key={index}> {musica.nombre} </td>
                                    <td> {musica.cancion} </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card;
