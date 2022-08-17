import ToppingsCheckbox from "./ToppingsCheckbox"

function Sections({ step, kind, data }:{ step:string, kind: string, data: string[] }){
	return <div className="sections">
        <div>
            <h2 style={{ textTransform: "uppercase" }}>{ step }</h2>
            <h3 style={{ textTransform: "capitalize" }}>{ kind }</h3>
        </div>
        <div className="selection-wrapper">
          {data.map((food: string) => {
                return <ToppingsCheckbox key={food} type={kind} title={food} />
            })}
        </div>
	</div>
}

export default Sections
