import ToppingsCheckbox from "./ToppingsCheckbox"

function Sections({ step, kind, data }:{ step:string, kind: string, data: string[] }){
	return <section className="sections">
        <div>
            <h2 className="capatilaize">{ step }</h2>
            <h3 className="capatilaize">{ kind }</h3>
        </div>
        <div className="selection-wrapper">
          {data.map((food: string) => {
                return <ToppingsCheckbox key={food} type={kind} title={food} />
            })}
        </div>
	</section>
}

export default Sections
