
const Templates= ({templates , setMeme , setBoxCount})=>{
    return(
        <div className="container">
          {templates.map((temp)=>(
            <div key={temp.id} className="templates" onClick={
                ()=>{
                        setMeme(temp);
                        setBoxCount(temp.box_count);
                    }
                }>
              <img src={temp.url} alt="img" className="image"/>
            </div>
          ))}
        </div>
    )
}

export default Templates;